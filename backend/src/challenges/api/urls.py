from django.urls import path
from .views import ChallengeListView, ChallengeDetailView


urlpatterns = [
    path('', ChallengeListView.as_view()),
    path('<pk>', ChallengeDetailView.as_view()),
]