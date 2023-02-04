---
title: "CMU 17-356: Software Engineering for Startups"
hide:
  - navigation
---

<img src="assets/images/logos/logo.png" width="80%" alt="Wordart logo for 17-356/17-766 saying Ship It, Ship It Good">

# 17-356 Software Engineering for Startups

## This Week

<div id="this-week">

{%- set this_week = extra.this_week -%}

<div class="card"> 
    <div class="header">
        Lectures & Readings
    </div>
    <div class="content">
        {% if this_week.lectures %}
            {% for lecture in this_week.lectures %}
                <div class="lecture-name">
                    {{ lecture.name }}
                </div>
                <div class="lecture-date">
                    <span class="material-symbols-outlined">calendar_month</span> 
                    {{ lecture.date }}
                </div>

                {% if lecture.link != "" %}
                <a class="label label-gold" href="{{lecture.link}}" target="_blank">
                    <span class="material-symbols-outlined">slideshow</span>
                    Slides
                </a>
                {% endif %}

                {% if lecture.reading %}
                    <a class="label label-blue" href="{{lecture.reading.link}}" target="_blank">
                        <span class="material-symbols-outlined">link</span>
                        {{lecture.reading.name}}
                    </a>
                    {% if lecture.reading.name2 %}
                        {% if lecture.reading.name2 != "" %}
                            <a class="label label-blue" href="{{lecture.reading.link2}}" target="_blank">
                            <span class="material-symbols-outlined">link</span>
                                {{lecture.reading.name2}}
                            </a>
                        {% endif %}
                    {% endif %}
                {% endif %}
                {% if not loop.last %}
                <hr/>
                {% endif %}
            {% endfor %}
        {% else %}
            None!
        {% endif %}
    </div>

</div>

<div class="card"> 
    <div class="header">
        Recitation
    </div>
    <div class="content">
        {% if this_week.recitation %}
            <div class="recitation-name">
                {{ this_week.recitation.name }}
            </div>

            {% if this_week.recitation.slides != "" %}
            <a class="label label-aqua" href="{{this_week.recitation.slides}}" target="_blank">
                <span class="material-symbols-outlined">slideshow</span>Slides
            </a>
            {% endif %}

            {% if this_week.recitation.handout != "" %}
            <a class="label label-aqua" href="{{this_week.recitation.handout}}">
                <span class="material-symbols-outlined">description</span>Handout
            </a>
            {% endif %}

            {% if this_week.recitation.quiz != "" %}
            <a class="label label-aqua" href="{{this_week.recitation.quiz}}" target="_blank">
                <span class="material-symbols-outlined">equalizer</span>Quiz
            </a>
            {% endif %}
        {% else %}
            None!
        {% endif %}
    </div>

    <div class="header">
        Office Hours
    </div>
    <div class="content">
        Held on the first floor lobby of TCS. See <a href="#class-calendar">class calendar</a> below for exact times!
    </div>

</div>

<div class="card"> 
    <div class="header">
        Current Assignment
    </div>
    <div class="content">
        {% if this_week.last_homework %}
            <div class="homework-name">
                {{ this_week.last_homework.name }}
            </div>

            {% if this_week.last_homework.deadline != "" %}
            <div class="homework-date">
                <span class="material-symbols-outlined">calendar_month</span>
                {{ this_week.last_homework.deadline }}
            </div>
            {% endif %}

            {% if this_week.last_homework.link != "" %}
            <a class="label label-red" href="{{this_week.last_homework.link}}">
                <span class="material-symbols-outlined">description</span>Handout
            </a>
            {% endif %}
        {% else %}
            None for this week!
        {% endif %}
    </div>

    <div class="header">
        Upcoming Assignments
    </div>
    <div class="content">
        {% if this_week.next_homework %}
            <div class="homework-name">
                {{ this_week.next_homework.name }}
            </div>

            <div class="homework-date">
                <span class="material-symbols-outlined">calendar_month</span>
                Released {{ this_week.next_homework.date }}
            </div>

            {% if this_week.next_homework.deadline != "" %}
            <div class="homework-date">
                <span class="material-symbols-outlined">calendar_month</span>
                {{ this_week.next_homework.deadline }}
            </div>
            {% endif %}

            {% if this_week.next_homework.link != "" %}
            <a class="label label-red" href="{{this_week.next_homework.link}}">
                <span class="material-symbols-outlined">description</span>Handout
            </a>
            {% endif %}
        {% else %}
            None!
        {% endif %}
    </div>

</div>

</div>

## Important Links

<div id="important-links">

{%- set links = extra.links -%}

{% for link in links %}
<a class="card" href="{{link.link}}" target="_blank">
<div class="content">
<img class="icon" src="{{link.icon}}" alt="{{link.name}} icon">
</div>
<div class="name">
{{ link.name }}
</div>
</a>
{% endfor %}

</div>

## Office Hours Calendar

<iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&mode=WEEK&showNav=1&showDate=1&showPrint=1&showCalendars=0&title=CMU%2017-356%20Office%20Hours&src=Y19hYjcxZWI3YzcwNjYzMDU3NjI2OGFiNmE2OWVlOWYwZjIxNGZiYjU3ZTQ3ZGQxYzQ1MWQ5NjZkZTU4MmM1ZWQzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23EF6C00" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>

## Weekly Schedule

<div id="schedule" markdown>

<!-- Loading in schedule from schedule.yaml -->

{%- set schedule = extra.schedule -%}

{% if schedule %}
{% set ns = namespace(recitation_days_left=0, homework_days_left=0) %}

<table>
    <thead>
        <th><b>Date</b></th>
        <th><b>Lecture</b></th>
        <th><b>Reading</b></th>
        <th><b>Recitation</b></th>
        <th><b>Homework Deadline</b></th>
    </thead>
    <tbody>
        {% for schedule_day in schedule %}
        <tr>
            <td><span class="schedule-day">{{schedule_day.date}}</span></td>

            <td><span class="schedule-lecture">
                {% if schedule_day.lecture.name != ""  %}
                    {% if schedule_day.lecture.link != "" %}
                        <a class="label label-gold" href="{{schedule_day.lecture.link}}" target="_blank">
                            {{schedule_day.lecture.name}}
                        </a>
                    {% else %}
                        <b>{{schedule_day.lecture.name}}</b>
                    {% endif %}
                {% endif %}
            </span></td>

            <td><span class="schedule-reading">
                {% if schedule_day.reading.name != "" %}
                    <a class="label label-blue" href="{{schedule_day.reading.link}}" target="_blank">
                        {{schedule_day.reading.name}}
                    </a>
                {% endif %}
                {% if schedule_day.reading.name2 %}
                    {% if schedule_day.reading.name2 != "" %}
                        <a class="label label-blue" href="{{schedule_day.reading.link2}}" target="_blank">
                            {{schedule_day.reading.name2}}
                        </a>
                    {% endif %}
                {% endif %}


            </span></td>

            {% if schedule_day.recitation.name != "" %}
                <td rowspan="5"><span class="schedule-recitation">
                    <b>{{schedule_day.recitation.name}}</b>
                    <br/>

                    {% if schedule_day.recitation.slides != "" %}
                    <a class="label label-aqua" href="{{schedule_day.recitation.slides}}" target="_blank">
                        <span class="material-symbols-outlined">slideshow</span>Slides
                    </a>
                    {% endif %}

                    {% if schedule_day.recitation.handout != "" %}
                    <a class="label label-aqua" href="{{schedule_day.recitation.handout}}">
                        <span class="material-symbols-outlined">description</span>Handout
                    </a>
                    {% endif %}

                    {% if schedule_day.recitation.quiz != "" %}
                    <a class="label label-aqua" href="{{schedule_day.recitation.quiz}}" target="_blank">
                        <span class="material-symbols-outlined">equalizer</span>Quiz
                    </a>
                    {% endif %}
                </span></td>
                {% set ns.recitation_days_left = 4 %}
            {% else %}
                {% if ns.recitation_days_left > 0 %}
                    {% set ns.recitation_days_left = ns.recitation_days_left - 1 %}
                {% else %}
                    <td><span class="schedule-recitation"></span></td>
                {% endif %}
            {% endif %}


            {% if schedule_day.homework.name != "" %}
                <td rowspan="{{schedule_day.homework.numDays}}"><span class="schedule-homework">
                    <b>{{schedule_day.homework.name}}</b>
                    <br/>
                    {{schedule_day.homework.deadline}}
                    <br/>

                    {% if schedule_day.homework.link != "" %}
                    <a class="label label-red" href="{{schedule_day.homework.link}}">
                        <span class="material-symbols-outlined">description</span>Instructions
                    </a>
                    {% endif %}
                </span></td>
                {% set ns.homework_days_left = schedule_day.homework.numDays - 1 %}
            {% else %}
                {% if ns.homework_days_left > 0 %}
                    {% set ns.homework_days_left = ns.homework_days_left - 1 %}
                {% else %}
                    <td><span class="schedule-homework"></span></td>
                {% endif %}
            {% endif %}
        </tr>
        {% endfor %}
    </tbody>

</table>

{% else %}
Coming Soon!
{% endif %}

</div>

## Staff

### Instructors

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

### Teaching Assistants

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
