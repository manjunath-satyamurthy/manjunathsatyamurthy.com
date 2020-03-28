from django.conf.urls import url

from anotherapp import views

urlpatterns = [
    url(r'^login/$', views.login_view, name='login'),
    url(r'^logout/$', views.logout_view, name='logout'),
    url(r'^get_home_page/$', views.get_homepage, name='get_home_page'),
    url(r'^update_home_page/$', views.update_homepage, name='update_home_page'),
    url(r'^get_technologies/$', views.get_technologies, name='get_technologies'),
    url(r'^get_work_history/$', views.get_work_history, name='get_work_history'),
    url(r'^get_education/$', views.get_education, name='get_education'),
    url(r'^get_projects/$', views.get_projects, name='get_projects'),
    url(r'^get_resume/$', views.get_resume, name='get_resume'),
    url(r'^update_resume/$', views.update_resume, name='update_resume'),
    url(r'^get_photos/$', views.get_photos, name='get_photos'),
    url(r'^google4a37ebd500121679.html$', views.google, name='google'),
]