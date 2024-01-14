---
title: Staff
hide:
    - navigation
---

## Instructors

<div id="course-instructors">
{%- set instructors = extra.staff | selectattr("role", "==", "Instructor") | list -%}
{% for instructor in instructors %}
<div class="staffer card">
    <div class="container">
        <img class="staffer-image" src="/assets/images/{{instructor.photo}}" alt="">
        <div>
            <h3 class="staffer-name">
                {{instructor.name}}
            </h3>
            <div class="staffer-links">
                <a href="mailto:{{instructor.email}}"><span class="material-symbols-outlined">
                    mail
                </span></a>
                {% if instructor.website %}
                <a href="{{instructor.website}}" target="_blank"><span class="material-symbols-outlined">
                    public
                </span></a>
                {% endif %}
            </div>
        </div>
    </div>
</div>
{% endfor %}

</div>

{%- set assistants = extra.staff | selectattr("role", "==", "Teaching Assistant") | list -%}
{%- set num_teaching_assistants = assistants | count -%}

{% if num_teaching_assistants > 0 %}

## Teaching Assistants

<div id="course-assistants">

{% for assistant in assistants %}

<div class="staffer card">
    <div class="container">
        <img class="staffer-image" src="/assets/images/{{assistant.photo}}" alt="">
        <div>
            <h3 class="staffer-name">
                {{assistant.name}}
            </h3>
            <div class="staffer-links">
                <a href="mailto:{{assistant.email}}"><span class="material-symbols-outlined">
                    mail
                </span></a>
                {% if assistant.website %}
                <a href="{{assistant.website}}" target="_blank"><span class="material-symbols-outlined">
                    public
                </span></a>
                {% endif %}
            </div>
        </div>
    </div>
</div>
{% endfor %}

</div>
{% endif %}
