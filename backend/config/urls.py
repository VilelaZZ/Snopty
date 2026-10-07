from django.contrib import admin
from django.urls import path, include

from rest_framework.routers import DefaultRouter

from usuarios.views import (
    teste,
    TecnologiaViewSet,
    CursoViewSet,
    CadastroView,
    LoginView
)


router = DefaultRouter()

router.register(
    'tecnologias',
    TecnologiaViewSet,
    basename='tecnologia'
)

router.register(
    'cursos',
    CursoViewSet,
    basename='curso'
)


urlpatterns = [

    path('admin/', admin.site.urls),

    path('api/teste/', teste),

    path('api/cadastro/', CadastroView.as_view()),

    path('api/login/', LoginView.as_view()),

    path('api/', include(router.urls)),

]