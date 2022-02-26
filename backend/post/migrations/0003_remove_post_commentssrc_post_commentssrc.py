# Generated by Django 4.0.2 on 2022-02-26 12:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comment', '0002_initial'),
        ('post', '0002_remove_post_comments'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='commentsSrc',
        ),
        migrations.AddField(
            model_name='post',
            name='commentsSrc',
            field=models.ManyToManyField(blank=True, null=True, related_name='post_commentSrc', to='comment.Comment'),
        ),
    ]
