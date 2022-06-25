import 'package:flutter/material.dart';
import 'package:presidents_app/data/models/president.dart';
import 'package:presidents_app/domain/presidents/presidents_controller.dart';
import 'package:presidents_app/presentation/utils.dart';

class PresidentsApp extends StatelessWidget {
  final PresidentsController presidentsController;

  const PresidentsApp({
    Key? key,
    required this.presidentsController,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Presidents App',
      home: Scaffold(
        appBar: AppBar(
          title: const Text('U.S. Presidents'),
        ),
        body: ListView.builder(
          itemCount: presidentsController.getAllPresidents().length,
          itemBuilder: (BuildContext context, int index) {
            final President president =
                presidentsController.getPresident(index + 1);

            return Card(
              child: InkWell(
                onTap: () => {},
                child: ExpansionTile(
                  leading: ClipRRect(
                    borderRadius: BorderRadius.circular(4.0),
                    child: Image.asset(
                      president.portraitFilePath,
                      width: 52.0,
                      height: 52.0,
                    ),
                  ),
                  title: Text(president.fullName),
                  subtitle: Text(lifespanString(president)),
                  trailing: Text('${president.number}'),
                  children: [
                    ListTile(
                      title: Text(
                        'Dates in office: ${timePeriodString(president.startDate, president.endDate)}',
                      ),
                    ),
                    ListTile(
                      title: Text('Party: ${president.party}'),
                    ),
                    ListTile(
                      title: Text('Location Born: ${president.birthplace}'),
                    ),
                    ListTile(
                      title: Text('Religion: ${president.religion}'),
                    ),
                  ],
                ),
              ),
            );
          },
        ),
      ),
      darkTheme: ThemeData.dark(),
    );
  }
}
