import 'package:flutter/material.dart';
import 'package:presidents_app/domain/presidents/presidents_controller.dart';
import 'package:presidents_app/presentation/presidents_app.dart';

void main() {
  runApp(
    PresidentsApp(
      presidentsController: PresidentsController(),
    ),
  );
}
