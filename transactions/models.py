from django.db import models
from django.utils import timezone

# Create your models here.
class Transaction(models.Model):
    
    client = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    created_date = models.DateTimeField(default=timezone.now)
    
    description = models.CharField(max_length=200)
    value = models.DecimalField(max_digits=25, decimal_places=2)
    transaction_date = models.DateTimeField()
    