from django.urls import path
from app.views import UserProfileView, UserLoginView, UserAPI, ProjectAPI, ServiceAPI
urlpatterns = [
    path('login/', UserLoginView.as_view(), name='login'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('project/', ProjectAPI.as_view(), name='project'),
    path('project/<int:pk>/', ProjectAPI.as_view(), name='project'),
    path('user/', UserAPI.as_view(), name='user'),
    path('user/<int:pk>/', UserAPI.as_view(), name='user'),
    path('service/', ServiceAPI.as_view(), name='service'),
    path('service/<int:pk>/', ServiceAPI.as_view(), name='service'),




]
