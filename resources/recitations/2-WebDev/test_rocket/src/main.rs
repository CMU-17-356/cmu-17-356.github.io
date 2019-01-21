#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use]
extern crate rocket;
#[macro_use]
extern crate serde_derive;
extern crate rocket_contrib;

use rocket::response::Redirect;
use rocket::Request;

use rocket_contrib::templates::handlebars::{
    Context, Handlebars, Helper, HelperResult, JsonRender, Output, RenderContext,
};
use rocket_contrib::templates::Template;

#[derive(Serialize)]
struct TemplateContext {
    title: &'static str,
    name: Option<String>,
    items: Vec<&'static str>,
    // This key tells handlebars which template is the parent.
    parent: &'static str,
}

#[get("/")]
fn index() -> Redirect {
    Redirect::to("/hello/Unknown")
}

#[get("/hello/<name>")]
fn hello(name: String) -> Template {
    Template::render(
        "index",
        &TemplateContext {
            title: "Hello",
            name: Some(name),
            items: vec!["One", "Two", "Three"],
            parent: "layout",
        },
    )
}

#[get("/about")]
fn about() -> Template {
    Template::render(
        "about",
        &TemplateContext {
            title: "About",
            name: None,
            items: vec!["Four", "Five", "Six"],
            parent: "layout",
        },
    )
}

#[catch(404)]
fn not_found(req: &Request) -> Template {
    let mut map = std::collections::HashMap::new();
    map.insert("path", req.uri().path());
    Template::render("error/404", &map)
}

fn wow_helper(
    h: &Helper,
    _: &Handlebars,
    _: &Context,
    _: &mut RenderContext,
    out: &mut Output,
) -> HelperResult {
    if let Some(param) = h.param(0) {
        out.write("<b><i>")?;
        out.write(&param.value().render())?;
        out.write("</b></i>")?;
    }

    Ok(())
}

fn rocket() -> rocket::Rocket {
    rocket::ignite()
        .mount("/", routes![index, hello, about])
        .register(catchers![not_found])
        .attach(Template::custom(|engines| {
            engines
                .handlebars
                .register_helper("wow", Box::new(wow_helper));
        }))
}

fn main() {
    rocket().launch();
}

#[cfg(test)]
mod test {

    use super::{rocket, TemplateContext};

    use rocket::http::Method::*;
    use rocket::http::Status;
    use rocket::local::{Client, LocalResponse};
    use rocket_contrib::templates::Template;

    macro_rules! dispatch {
        ($method:expr, $path:expr, $test_fn:expr) => {{
            let client = Client::new(rocket()).unwrap();
            $test_fn(&client, client.req($method, $path).dispatch());
        }};
    }

    #[test]
    fn test_root() {
        // Check that the redirect works.
        for method in &[Get, Head] {
            dispatch!(*method, "/", |_: &Client, mut response: LocalResponse| {
                assert_eq!(response.status(), Status::SeeOther);
                assert!(response.body().is_none());

                let location: Vec<_> = response.headers().get("Location").collect();
                assert_eq!(location, vec!["/hello/Unknown"]);
            });
        }

        // Check that other request methods are not accepted (and instead caught).
        for method in &[Post, Put, Delete, Options, Trace, Connect, Patch] {
            dispatch!(
                *method,
                "/",
                |client: &Client, mut response: LocalResponse| {
                    let mut map = ::std::collections::HashMap::new();
                    map.insert("path", "/");
                    let expected = Template::show(client.rocket(), "error/404", &map).unwrap();

                    assert_eq!(response.status(), Status::NotFound);
                    assert_eq!(response.body_string(), Some(expected));
                }
            );
        }
    }

    #[test]
    fn test_name() {
        // Check that the /hello/<name> route works.
        dispatch!(
            Get,
            "/hello/Jack%20Daniels",
            |client: &Client, mut response: LocalResponse| {
                let context = TemplateContext {
                    title: "Hello",
                    name: Some("Jack Daniels".into()),
                    items: vec!["One", "Two", "Three"],
                    parent: "layout",
                };

                let expected = Template::show(client.rocket(), "index", &context).unwrap();
                assert_eq!(response.status(), Status::Ok);
                assert_eq!(response.body_string(), Some(expected));
            }
        );
    }

    #[test]
    fn test_404() {
        // Check that the error catcher works.
        dispatch!(
            Get,
            "/hello/",
            |client: &Client, mut response: LocalResponse| {
                let mut map = ::std::collections::HashMap::new();
                map.insert("path", "/hello/");

                let expected = Template::show(client.rocket(), "error/404", &map).unwrap();
                assert_eq!(response.status(), Status::NotFound);
                assert_eq!(response.body_string(), Some(expected));
            }
        );
    }
}
