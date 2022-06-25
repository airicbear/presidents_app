import 'package:presidents_app/data/datasources/database/presidents_database.dart';
import 'package:presidents_app/data/datasources/presidents_data_source.dart';
import 'package:presidents_app/data/models/president.dart';

class PresidentsController {
  final PresidentsDataSource _presidentsDataSource = PresidentsDataSourceImpl(
    presidentsDatabase: PresidentsDatabase(),
  );

  President getPresident(int number) {
    return _presidentsDataSource.getPresident(number);
  }

  List<President> getAllPresidents() {
    return _presidentsDataSource.getAllPresidents();
  }
}
