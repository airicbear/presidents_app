class President {
  final int number;
  final String firstName;
  final String lastName;
  final String party;
  final String birthplace;
  final DateTime dateOfBirth;
  final DateTime? dateOfDeath;
  final DateTime startDate;
  final DateTime endDate;
  final String religion;
  final String portraitFilePath;

  President({
    required this.number,
    required this.firstName,
    required this.lastName,
    required this.party,
    required this.birthplace,
    required this.dateOfBirth,
    required this.dateOfDeath,
    required this.startDate,
    required this.endDate,
    required this.religion,
    required this.portraitFilePath,
  });

  String get fullName {
    return '$firstName $lastName';
  }
}
