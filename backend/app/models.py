from datetime import datetime, timezone
from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser


current_timestamp = datetime.now()


class UserManager(BaseUserManager):
    def create_user(self, email, first_name, last_name, gender, date_of_birth, city, country, degree, phone, address, image, password=None, password2=None):
        """
        Creates and saves a User with the given email, name, tc, password and password2.
        """
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
            first_name=first_name,
            last_name=last_name,
            gender=gender,
            phone=phone,
            address=address,
            image=image,
            city=city,
            country=country,
            degree=degree,
            date_of_birth=date_of_birth,
            created_at=current_timestamp,

        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, first_name, last_name, gender, date_of_birth, city, country, degree, phone, address, image, password=None):
        """
        Creates and saves a superuser with the given email, date of
        birth and password.
        """
        user = self.create_user(
            email,
            password=password,
            first_name=first_name,
            last_name=last_name,
            gender=gender,
            phone=phone,
            address=address,
            image=image,
            city=city,
            country=country,
            degree=degree,
            date_of_birth=date_of_birth,
            created_at=current_timestamp,


        )
        user.is_admin = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    email = models.EmailField(verbose_name='Email',
                              max_length=255, unique=True)
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    gender = models.CharField(max_length=200)
    phone = models.CharField(max_length=20)
    address = models.CharField(max_length=200)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    degree = models.CharField(max_length=200)
    date_of_birth = models.DateField(null=True, blank=True)
    country = models.CharField(max_length=200)
    city = models.CharField(max_length=200)
    image = models.ImageField(upload_to="register/")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name',
                       'gender', 'phone', 'address', 'image', 'date_of_birth', 'city', 'country', 'degree', 'created_at']

    def __str__(self):
        return self.first_name

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return self.is_admin

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @ property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin


class Project(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    users = models.ForeignKey(
        "User", blank=True, null=True, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="project/")
    created_at = models.DateField(auto_now_add=False)

    def __str__(self):
        return self.name


class Service(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    users = models.ForeignKey(
        "User", blank=True, null=True, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="service/")
    created_at = models.DateField(auto_now_add=False)

    def __str__(self):
        return self.name