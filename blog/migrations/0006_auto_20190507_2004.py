# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-05-07 20:04
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0005_auto_20190424_2034'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='modify_time',
            field=models.DateTimeField(auto_now=True, verbose_name='修改时间'),
        ),
    ]