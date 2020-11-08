from rest_framework import serializers
from challenges.models import Challenge

class ChallengeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Challenge
        fields = ('id', 'name', 'assignor', 'description_small', 'description_small_final',
        'description_large', 'description_large_final', 'assignor_website', 'due_date',
        'apply_until_date', 'date_posted', 'applicants', 'admitted',
        'contact_person_full_name', 'contact_person_email', 'cover_image',
        'prize', 'category')