import 'package:presidents_app/data/models/president.dart';

String timePeriodString(DateTime startDate, DateTime? endDate) {
  return '${startDate.year}—${endDate?.year ?? "present"}';
}

String lifespanString(President president) {
  int age = (president.dateOfDeath ?? DateTime.now())
          .difference(president.dateOfBirth)
          .inDays ~/
      365;

  return '${timePeriodString(president.dateOfBirth, president.dateOfDeath)} ($age years old)';
}
