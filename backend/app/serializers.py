from rest_framework import serializers
from app.models import Project, User, Service

from rest_framework.serializers import ValidationError


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(
        style={'input_type': 'password'}, write_only=True)
    image = serializers.ImageField(max_length=None, use_url=True)

    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'gender',
                  'phone', 'address', 'image', 'password', 'password2', 'role', 'date_of_birth', 'city', 'country', 'degree', 'created_at']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def validate(self, attrs):
        password = attrs.get('password')
        password2 = attrs.get('password2')
        if password != password2:
            raise serializers.ValidationError(
                'Password and confirm Password does not match')
        return attrs

    def create(self, validate_data):
        return User.objects.create_user(**validate_data)


class UserLoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255)

    class Meta:
        model = User
        fields = ['email', 'password']


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name',
                  'image', 'gender', 'address', 'phone', 'city', 'country', 'degree', 'date_of_birth', 'created_at']
