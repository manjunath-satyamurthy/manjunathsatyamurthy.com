# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-08-18 10:27
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_education_project'),
    ]

    operations = [
        migrations.AddField(
            model_name='rootuser',
            name='resume',
            field=models.FileField(default='resume/resume.pdf', upload_to='resume'),
        ),
    ]
