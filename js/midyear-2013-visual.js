$(function () {
  if ($('#decline-mass-events-congo').length) {
  $('#decline-mass-events-congo').highcharts({
    chart: {
        type: 'column'
    },
    title: {
        text: 'Decline in Mass Killings and Abductions in Congo'
    },
    subtitle: {
        text: 'January 2009 - June 2013'
    },
    xAxis: {
        categories: ['Q1 09','Q2','Q3','Q4', 'Q1 10','Q2','Q3','Q4', 'Q1 11','Q2','Q3','Q4', 'Q1 12','Q2','Q3','Q4', 'Q1 13','Q2']
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    credits: {
      enabled: false
    },
    series: [{
        name: 'Mass LRA attacks in Congo (5 or more killings and/or 10 or more abductions)',
        data: [16, 9, 20, 18, 29, 5, 3, 2, 3, 5, 1, 0, 1, 2, 0, 0, 1, 0]
    }]
  });
}
});

$(function () {
  if ($('#executive-summary-visual-3').length) {
  $('#executive-summary-visual-3').highcharts({
    chart: {
        type: 'column'
    },
    title: {
        text: 'LRA Activity in Haut Kotto prefecture, CAR'
    },
    subtitle: {
        text: 'January-June 2013'
    },
    colors: ["#2f7ed8",'#0d233a', '#525252', '#910000'],
    xAxis: {
        labels: {
          enabled: false
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    credits: {
      enabled: false
    },
    series: [{
        name: 'Attacks',
        data: [8]

    }, {
        name: 'Killings',
        data: [25]

    }, {
        name: 'Abductions',
        data: [79]

    }]
  });
}
});

$(function () {
  if ($('#executive-summary-visual-2').length) {
  $('#executive-summary-visual-2').highcharts({
    chart: {
        type: 'column'
    },
    title: {
        text: 'Number of LRA Killings in Congo & Central African Republic (CAR)'
    },
    subtitle: {
        text: '2012-2013'
    },
    colors: ["#2f7ed8",'#0d233a', '#525252', '#910000'],
    xAxis: {
        categories: [
          'Congo',
          'CAR'
        ]
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Killings'
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    credits: {
      enabled: false
    },
    series: [{
        name: '2012',
        data: [12, 20]

    }, {
        name: '2013',
        data: [13, 34]

    }]
  });
}
});

$(function () {
  if ($('#executive-summary-visual-1').length) {
  $('#executive-summary-visual-1').highcharts({
    chart: {
        type: 'column'
    },
    colors: ["#2f7ed8", '#265688', '#0d233a', '#525252'],
    title: {
        text: 'Number of LRA Attacks From January-June'
    },
    subtitle: {
      text: '2010-2013'
    },
    xAxis: {
        categories: [
          'LRA Attacks'
        ]
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Attacks'
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    credits: {
      enabled: false
    },
    series: [{
        name: 'Jan-June 2010',
        data: [359]

    }, {
        name: 'Jan-June 2011',
        data: [218]

    }, {
        name: 'Jan-June 2012',
        data: [194]

    }, {
        name: 'Jan-June 2013',
        data: [90]

    }]
  });
}
});


$(function () {
  if ($('#attack-by-country-visual').length) {
    $('#attack-by-country-visual').highcharts({
      colors: ['rgb(51,51,51)', 'rgb(179, 84, 72)', 'rgb(150, 150, 150)'],
      title: {
          text: 'Attacks by Country',
      },
      subtitle: {
          text: 'January 2011 - January 2013',
      },
      xAxis: {
          categories: ['Jul 2011', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan 2012', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan 2013', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
      },
      yAxis: {
          title: {
              text: 'Attacks'
          },
          plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
          }]
      },
      tooltip: {
      },
      credits: {
        enabled: false
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
      },
      series: [{
          name: 'Congo',
          data: [23, 15, 6, 13, 7, 9, 13, 35, 38, 31, 21, 20, 17, 12, 11, 6, 12, 7, 17, 13, 15, 8, 5, 7]
      }, {
          name: 'CAR',
          data: [4, 0, 5, 1, 0, 1, 1, 4, 23, 1, 0, 7, 1, 0, 6, 2, 6, 3, 3, 8, 5, 1, 5, 8]
      }, {
          name: 'S Sudan',
          data: [3, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }]
    });
  };
});

$(function () {
  if ($('#attacks-by-province-car').length) {
    $('#attacks-by-province-car').highcharts({
      title: {
          text: 'LRA Attacks in CAR by Province',
          x: -20 //center
      },
      subtitle: {
          text: 'January 2010 - June 2013',
          x: -20
      },
      xAxis: {
          categories: ['Q1 10', 'Q2', 'Q3', 'Q4', 'Q1 11', 'Q2', 'Q3', 'Q4', 'Q1 12', 'Q2', 'Q3', 'Q4','Q1 13', 'Q2']
      },
      yAxis: {
          title: {
              text: 'Attacks'
          },
          plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
          }]
      },
      tooltip: {
      },
      credits: {
        enabled: false
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
      },
      series: [{
          name: 'Mbomou',
          data: [23, 23, 2, 2, 5, 2, 5, 0, 15, 8, 4, 3, 4, 0]
      }, {
          name: 'Haut-Mbomou',
          data: [19, 18, 4, 8, 9, 11, 4, 2, 9, 0, 3, 6, 10, 1]
      }, {
          name: 'Haute Kotto',
          data: [ 1, 1, 3, 0, ,0, 0, 0, 0, 2, 0, 0, 1, 1, 7]
      }]
    });
  };
});

$(function () {
  if ($('#abductions-killings-car').length) {
  $('#abductions-killings-car').highcharts({
    chart: {
        type: 'column'
    },
    title: {
        text: 'LRA Killings and Abductions by Prefecture in CAR'
    },
    subtitle: {
        text: 'January 2010 - June 2013'
    },
    xAxis: {
        categories: [
          'Killings',
          'Abductions'
        ]
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Civilians'
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    credits: {
      enabled: false
    },
    series: [{
        name: 'Haute Kotto',
        data: [33, 256]

    }, {
        name: 'Haut-Mbomou',
        data: [117, 307]

    }, {
        name: 'Mboumou',
        data: [107, 542]

    }, {
        name: 'Vakaga',
        data: [3, 125]

    }]
  });
  }
});
    
$(function () {
  if ($('#updf-controlled-areas-of-car').length) {
  $('#updf-controlled-areas-of-car').highcharts({
    chart: {
        type: 'column'
    },
    title: {
        text: 'Trends in LRA Activity in Eastern CAR'
    },
    subtitle: {
        text: 'January 2011-June 2013'
    },
    colors: ["#2f7ed8",'#0d233a', '#525252'],
    xAxis: {
        categories: [
          'Areas under UPDF influence',
          'Areas not under UPDF influence'
        ]
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    credits: {
      enabled: false
    },
    series: [{
        name: 'Attacks',
        data: [66, 44]

    },{
        name: 'Killings',
        data: [36, 63]

    }, {
        name: 'Abductions',
        data: [179, 332]

    }]
  });
}
});

$(function () {
  if ($('#decline_in_killings').length) {
  $('#decline_in_killings').highcharts({
    chart: {
        type: 'column'
    },
    title: {
        text: 'Total Number of Civilians Abducted in LRA Mass Abductions'
    },
    subtitle: {
        text: 'January 2010-June 2013'
    },
    colors: ["#2f7ed8",'#0d233a', '#525252'],
    xAxis: {
      categories: ['Q1 10', 'Q2', 'Q3', 'Q4', 'Q1 11', 'Q2', 'Q3', 'Q4', 'Q1 12', 'Q2', 'Q3', 'Q4','Q1 13', 'Q2']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Civilians Abducted'
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    credits: {
      enabled: false
    },
    series: [{
        name: 'Congo',
        data: [223,33,0,18,60,42,12,0,10,23,0,0,0,0,]

    },{
        name: 'CAR',
        data: [186,115,187,61,46,43,0,37,13,0,59,60,11,77]

    }]
  });
}
});

$(function () {
  if ($('#executive-summary-visual-4').length) {
  $('#executive-summary-visual-4').highcharts({
    chart: {
        type: 'column'
    },
    colors: ["#2f7ed8",'#0d233a', '#525252', '#910000'],
    title: {
        text: 'Long-term LRA returnees'
    },
    subtitle: {
      text: 'January-June 2013'
    },
    xAxis: {
        labels: {
          enabled: false
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Long-term LRA returnees'
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    credits: {
      enabled: false
    },
    series: [{
        name: 'Ugandan combatants',
        data: [10]
    }, {
        name: 'Ugandan women and children',
        data: [5]
    }, {
        name: 'Non-Ugandans',
        data: [40]
    }]
  });
}
});

$(function () {
  if ($('#uag-pie').length) {
    $('#uag-pie').highcharts({
    chart: {
        type: 'column'
    },
    colors: ["#2f7ed8",'#0d233a', '#525252', '#910000'],
    title: {
      text: 'LRA vs. Unidentified Armed Group (UAG) Attacks in LRA-affected Areas of Congo'
    },
    subtitle: {
      text: 'January-June 2013'
    },
    xAxis: {
        labels: {
          enabled: false
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Attacks'
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    credits: {
      enabled: false
    },
    series: [{
        name: 'LRA',
        data: [64]
    }, {
        name: 'UAG',
        data: [37]
    }]
  });
}
});





// FRENCH VERSION




$(function () {
  if ($('#fr-decline-mass-events-congo').length) {
  $('#fr-decline-mass-events-congo').highcharts({
    chart: {
        type: 'column'
    },
    title: {
        text: 'D\u00e9clin des Massacres et Enl\u00e8vements en Masse au Congo'
    },
    subtitle: {
        text: 'Janvier 2009-Juin 2013'
    },
    xAxis: {
        categories: ['Q1 09','Q2','Q3','Q4', 'Q1 10','Q2','Q3','Q4', 'Q1 11','Q2','Q3','Q4', 'Q1 12','Q2','Q3','Q4', 'Q1 13','Q2']
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    credits: {
      enabled: false
    },
    series: [{
        name: 'Attaques en Masse de la LRA au Congo (5 meurtres ou plus et / ou 10 enl\u00e8vements ou plus)',
        data: [16, 9, 20, 18, 29, 5, 3, 2, 3, 5, 1, 0, 1, 2, 0, 0, 1, 0]
    }]
  });
}
});

$(function () {
  if ($('#fr-executive-summary-visual-3').length) {
  $('#fr-executive-summary-visual-3').highcharts({
    chart: {
        type: 'column'
    },
    title: {
        text: 'Activit\u00e9 de la LRA dans la pr\u00e9fecture du Haut-Kotto, RCA'
    },
    subtitle: {
        text: 'Janvier-Juin 2013'
    },
    colors: ["#2f7ed8",'#0d233a', '#525252', '#910000'],
    xAxis: {
        labels: {
          enabled: false
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    credits: {
      enabled: false
    },
    series: [{
        name: 'Attaques',
        data: [8]

    }, {
        name: 'Meurtres',
        data: [25]

    }, {
        name: 'Enl\u00e8vements',
        data: [79]

    }]
  });
}
});

$(function () {
  if ($('#fr-executive-summary-visual-2').length) {
  $('#fr-executive-summary-visual-2').highcharts({
    chart: {
        type: 'column'
    },
    title: {
        text: 'Nombre de Meurtres de la LRA au Congo & RCA'
    },
    subtitle: {
        text: '2012-2013'
    },
    colors: ["#2f7ed8",'#0d233a', '#525252', '#910000'],
    xAxis: {
        categories: [
          'Congo',
          'RCA'
        ]
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Nombre de Meurtres'
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    credits: {
      enabled: false
    },
    series: [{
        name: '2012',
        data: [12, 20]

    }, {
        name: '2013',
        data: [13, 34]

    }]
  });
}
});

$(function () {
  if ($('#fr-executive-summary-visual-1').length) {
  $('#fr-executive-summary-visual-1').highcharts({
    chart: {
        type: 'column'
    },
    colors: ["#2f7ed8", '#265688', '#0d233a', '#525252'],
    title: {
        text: "Nombre d\'Attaques de la LRA de Janvier \u00e0 Juin"
    },
    subtitle: {
      text: '2010-2013'
    },
    xAxis: {
        categories: [
          'Attaques de la LRA'
        ]
    },
    yAxis: {
        min: 0,
        title: {
            text: " Nombre d\u2019Attaques"
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    credits: {
      enabled: false
    },
    series: [{
        name: 'Jan-Juin 2010',
        data: [359]

    }, {
        name: 'Jan-Juin 2011',
        data: [218]

    }, {
        name: 'Jan-Juin 2012',
        data: [194]

    }, {
        name: 'Jan-Juin 2013',
        data: [90]

    }]
  });
}
});


$(function () {
  if ($('#fr-attack-by-country-visual').length) {
    $('#fr-attack-by-country-visual').highcharts({
      colors: ['rgb(51,51,51)', 'rgb(179, 84, 72)', 'rgb(150, 150, 150)'],
      title: {
          text: 'Attacks by Country',
      },
      subtitle: {
          text: 'January 2011 - January 2013',
      },
      xAxis: {
          categories: ['Jul 2011', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan 2012', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan 2013', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
      },
      yAxis: {
          title: {
              text: 'Attacks'
          },
          plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
          }]
      },
      tooltip: {
      },
      credits: {
        enabled: false
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
      },
      series: [{
          name: 'Congo',
          data: [23, 15, 6, 13, 7, 9, 13, 35, 38, 31, 21, 20, 17, 12, 11, 6, 12, 7, 17, 13, 15, 8, 5, 7]
      }, {
          name: 'CAR',
          data: [4, 0, 5, 1, 0, 1, 1, 4, 23, 1, 0, 7, 1, 0, 6, 2, 6, 3, 3, 8, 5, 1, 5, 8]
      }, {
          name: 'S Sudan',
          data: [3, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }]
    });
  };
});

$(function () {
  if ($('#fr-attacks-by-province-car').length) {
    $('#fr-attacks-by-province-car').highcharts({
      title: {
          text: 'LRA Attacks in CAR by Province',
          x: -20 //center
      },
      subtitle: {
          text: 'January 2010 - June 2013',
          x: -20
      },
      xAxis: {
          categories: ['Q1 10', 'Q2', 'Q3', 'Q4', 'Q1 11', 'Q2', 'Q3', 'Q4', 'Q1 12', 'Q2', 'Q3', 'Q4','Q1 13', 'Q2']
      },
      yAxis: {
          title: {
              text: 'Attacks'
          },
          plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
          }]
      },
      tooltip: {
      },
      credits: {
        enabled: false
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
      },
      series: [{
          name: 'Mbomou',
          data: [23, 23, 2, 2, 5, 2, 5, 0, 15, 8, 4, 3, 4, 0]
      }, {
          name: 'Haut-Mbomou',
          data: [19, 18, 4, 8, 9, 11, 4, 2, 9, 0, 3, 6, 10, 1]
      }, {
          name: 'Haute Kotto',
          data: [ 1, 1, 3, 0, ,0, 0, 0, 0, 2, 0, 0, 1, 1, 7]
      }]
    });
  };
});

$(function () {
  if ($('#fr-abductions-killings-car').length) {
  $('#fr-abductions-killings-car').highcharts({
    chart: {
        type: 'column'
    },
    title: {
        text: 'LRA Killings and Abductions by Prefecture in CAR'
    },
    subtitle: {
        text: 'January 2010 - June 2013'
    },
    xAxis: {
        categories: [
          'Killings',
          'Abductions'
        ]
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Civilians'
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    credits: {
      enabled: false
    },
    series: [{
        name: 'Haute Kotto',
        data: [33, 256]

    }, {
        name: 'Haut-Mbomou',
        data: [117, 307]

    }, {
        name: 'Mboumou',
        data: [107, 542]

    }, {
        name: 'Vakaga',
        data: [3, 125]

    }]
  });
  }
});
    
$(function () {
  if ($('#fr-updf-controlled-areas-of-car').length) {
  $('#fr-updf-controlled-areas-of-car').highcharts({
    chart: {
        type: 'column'
    },
    title: {
        text: 'Tendances dans l\u2019activit\u00e9 de la LRA dans l\u2019est de la RCA'
    },
    subtitle: {
        text: 'Janvier 2011-Juin 2013'
    },
    colors: ["#2f7ed8",'#0d233a', '#525252'],
    xAxis: {
        categories: [
          'Zones sous influence UPDF',
          'Zones non sous influence UPDF'
        ]
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    credits: {
      enabled: false
    },
    series: [{
        name: 'Attaques',
        data: [66, 44]

    },{
        name: 'Meurtres',
        data: [36, 63]

    }, {
        name: 'Enl\u00e8vements',
        data: [179, 332]

    }]
  });
}
});

$(function () {
  if ($('#fr-decline_in_killings').length) {
  $('#fr-decline_in_killings').highcharts({
    chart: {
        type: 'column'
    },
    title: {
        text: 'Nombre total de civils enlev\u00e9s dans les enl\u00e8vements de masse par la LRA'
    },
    subtitle: {
        text: 'Janvier 2010-Juin 2013'
    },
    colors: ["#2f7ed8",'#0d233a', '#525252'],
    xAxis: {
      categories: ['Q1 10', 'Q2', 'Q3', 'Q4', 'Q1 11', 'Q2', 'Q3', 'Q4', 'Q1 12', 'Q2', 'Q3', 'Q4','Q1 13', 'Q2']
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    credits: {
      enabled: false
    },
    series: [{
        name: 'Congo',
        data: [223,33,0,18,60,42,12,0,10,23,0,0,0,0,]

    },{
        name: 'RCA',
        data: [186,115,187,61,46,43,0,37,13,0,59,60,11,77]

    }]
  });
}
});

$(function () {
  if ($('#fr-executive-summary-visual-4').length) {
  $('#fr-executive-summary-visual-4').highcharts({
    chart: {
        type: 'column'
    },
    colors: ["#2f7ed8",'#0d233a', '#525252', '#910000'],
    title: {
        text: 'les rapatri\u00e9s LRA de long terme'
    },
    subtitle: {
      text: 'Janvier-Juin 2013'
    },
    xAxis: {
        labels: {
          enabled: false
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Nombre des rapatri\u00e9s LRA de long terme'
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    credits: {
      enabled: false
    },
    series: [{
        name: 'Combattants ougandais',
        data: [10]
    }, {
        name: 'Femmes et enfants ougandais',
        data: [5]
    }, {
        name: 'Non-ougandais',
        data: [40]
    }]
  });
}
});

$(function () {
  if ($('#fr-uag-pie').length) {
    $('#fr-uag-pie').highcharts({
    chart: {
        type: 'column'
    },
    colors: ["#2f7ed8",'#0d233a', '#525252', '#910000'],
    title: {
      text: 'Attaques de la LRA vs. Groupe Arm\u00e9 Non-identifi\u00e9 (GAN) dans les zones touch\u00e9es par la LRA du Congo'
    },
    subtitle: {
      text: 'Janvier - Juin 2013'
    },
    xAxis: {
        labels: {
          enabled: false
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Nombre d\u2019Attaques'
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    credits: {
      enabled: false
    },
    series: [{
        name: 'LRA',
        data: [64]
    }, {
        name: 'GAN',
        data: [37]
    }]
  });
}
});