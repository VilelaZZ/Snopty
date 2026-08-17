from django.db import models


class Tecnologia(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField(blank=True)

    def __str__(self):
        return self.nome


class Curso(models.Model):
    nome = models.CharField(max_length=200)
    descricao = models.TextField(blank=True)
    plataforma = models.CharField(max_length=100)
    url = models.URLField()
    tecnologia = models.ForeignKey(
        Tecnologia,
        on_delete=models.CASCADE,
        related_name='cursos'
    )

    def __str__(self):
        return self.nome