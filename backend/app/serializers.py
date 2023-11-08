from rest_framework import serializers
from app.models import Project, User, Service, Experience, Education
from rest_framework.serializers import ValidationError
from django.utils.encoding import smart_str, force_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.auth.tokens import PasswordResetTokenGenerator


class DummyModel:
    # Define an empty model that doesn't exist in your database.
    pass


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'


class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
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


class ChangePasswordSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        max_length=225, style={'input_type': 'password'}, write_only=True)
    password2 = serializers.CharField(
        max_length=225, style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = User
        fields = ['password', 'password2']

    def validate(self, attrs):
        password = attrs.get('password')
        password2 = attrs.get('password2')
        user = self.context.get('user')
        if password != password2:
            raise serializers.ValidationError(
                "Password and password2 doesn't match")
        user.set_password(password)
        user.save()
        return attrs


class SendPasswordResetEmailSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=225)

    class Meta:
        model = User
        fields = ['email']

        def validate(self, attrs):
            email = attrs.get('email')
            if User.objects.filter(email=email).exist():
                user = User.objects.get(email=email)
                uid = urlsafe_base64_encode(force_bytes(user.id))
                print('Encode', uid)
                token = PasswordResetTokenGenerator().make_token(user)
                print('Password Reset Token', token)
                link = 'http://localhost:5173/api/user/reset/'+uid+'/'+token
                print("Password Reset Link",  link)
                return attrs
            else:
                raise ValidationError('You are not register user')
