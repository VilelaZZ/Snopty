from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from usuarios.views import teste, TecnologiaViewSet, CursoViewSet


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
    path('api/', include(router.urls)),
]