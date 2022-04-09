const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: './cypress/reportrs/cucumberJson',
	reportPath: './cypress/cucumber-report/',
	metadata:{
        browser: {
            name: 'chrome',
            version: '60'
        },
        device: 'Local test machine',
        platform: {
            name: 'ubuntu',
            version: '16.04'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Test Beetrack Francesca Castillo'},
            {label: 'Release', value: '0.0.1'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: 'Abr 07th 2022, 01:40 AM EST'},
            {label: 'Execution End Time', value:  'Abr 07th 2022, 02:02 AM EST'},
        ]
    }
});