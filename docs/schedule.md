---
title: "CMU 17-356: Software Engineering for Startups"
hide:
  - navigation
---

# Weekly Schedule

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
                {% if schedule_day.lecture.name != "" and schedule_day.lecture.link != "" %}
                    <a class="label label-gold" href="{{schedule_day.lecture.link}}" target="_blank">
                        {{schedule_day.lecture.name}}
                    </a>
                {% elif schedule_day.lecture.name != "" %}
                    <b>{{schedule_day.lecture.name}}</b>
                {% endif %}
            </span></td>

            <td><span class="schedule-reading">
                {% if schedule_day.reading.name != "" %}
                    <a class="label label-blue" href="{{schedule_day.reading.link}}" target="_blank">
                        {{schedule_day.reading.name}}
                    </a>
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
                        <span class="material-symbols-outlined">description</span>Handout
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
