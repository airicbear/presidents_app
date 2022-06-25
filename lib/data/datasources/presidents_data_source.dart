import 'package:presidents_app/data/datasources/database/presidents_database.dart';
import 'package:presidents_app/data/models/president.dart';

abstract class PresidentsDataSource {
  President getPresident(int number);
  List<President> getAllPresidents();
}

class PresidentsDataSourceImpl implements PresidentsDataSource {
  final PresidentsDatabase presidentsDatabase;

  PresidentsDataSourceImpl({
    required this.presidentsDatabase,
  });

  @override
  President getPresident(int number) {
    return presidentsDatabase.getPresidents().firstWhere(
          (president) => president.number == number,
        );
  }

  @override
  List<President> getAllPresidents() {
    return presidentsDatabase.getPresidents();
  }
}
