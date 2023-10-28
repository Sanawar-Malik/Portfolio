from django.urls import path
from . import views
from app.views import UserProfileView, UserLoginView, UserAPI, ProjectAPI, ServiceAPI, project_get, services_get,users_get
urlpatterns = [
    path('login/', UserLoginView.as_view(), name='login'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('project/', ProjectAPI.as_view(), name='project'),
    path('project/<int:pk>/', ProjectAPI.as_view(), name='project'),
    path('user/', UserAPI.as_view(), name='user'),
    path('user/<int:pk>/', UserAPI.as_view(), name='user'),
    path('service/', ServiceAPI.as_view(), name='service'),
    path('service/<int:pk>/', ServiceAPI.as_view(), name='service'),


    # ----------------------functional components-----------------
    path('projects/', views.project_get, name='project_list'),
    path('project/<int:pk>/', views.project_get, name='project'),
    path('services/', views.services_get, name='services_list'),
    path('service/<int:pk>/', views.services_get, name='service'),
    path('user/<int:pk>/', views.users_get, name='user'),
    path('users/', views.users_get, name='user_list')



]
