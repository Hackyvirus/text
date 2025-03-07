let limited,
  surplus,
  enaYes,
  enaNo,
  balancePeriod,
  balanceYear = false;

$("#limited").click(() => {
  console.log("limited");
  $("#second-biq").css("display", "flex");
  $("#limited").addClass("active");
  $("#surplus").removeClass("active");
  limited = true;
  surplus = false;
});
$("#surplus").click(() => {
  console.log("surplus");
  $("#second-biq").css("display", "flex");
  $("#surplus").addClass("active");
  $("#limited").removeClass("active");
  limited = false;
  surplus = true;
});
$("#ENA-Yes").click(() => {
  console.log("ENA-Yes");
  $("#third-biq").css("display", "flex");
  $("#ENA-Yes").addClass("active");
  $("#ENA-No").removeClass("active");
  enaYes = true;
  enaNo = false;
});
$("#ENA-No").click(() => {
  console.log("ENA-No");
  $("#third-biq").css("display", "flex");
  $("#ENA-Yes").removeClass("active");
  $("#ENA-No").addClass("active");
  enaYes = false;
  enaNo = true;
});
$("#balance-period").click(() => {
  console.log("balance-period");
  $("#balance-period").addClass("active");
  $("#beginning-Year").removeClass("active");
  balancePeriod = true;
  balanceYear = false;
});
$("#beginning-Year").click(() => {
  console.log("beginning-Year");
  $("#balance-period").removeClass("active");
  $("#beginning-Year").addClass("active");
  balancePeriod = false;
  balanceYear = true;
});
$("#second-nav-item").click(() => {
  console.log("second-nav-item");
  $("#second-nav-item").addClass("active");
  $("#first-nav-item").removeClass("active");
  if (balancePeriod) {
    console.log("balance-period");
    $("#basic-information-box").css("display", "none");
    $("#balancePeriodBox").removeClass("inactive-box");
  } else if (balanceYear) {
    console.log("balance-year");
    $("#basic-information-box").css("display", "none");
    $("#balanceYearBox").removeClass("inactive-box");
  } else {
    alert("Please enter the balance period or beginning year");
  }
  $("#basic-information-box").css("display", "none");
  $("#balancePeriodBox").removeClass("inactive-box");
});

function hideTabOne() {
  $("#basic-information-box").css("display", "none");
}
function hideTabTwo() {
  $("#tab2").css("display", "none");
}
function hideTabThree() {
  $("#tab3").css("display", "none");
}
function hideTabFour() {
  $("#tab4").css("display", "none");
}
function hideTabFive() {
  $("#tab5").css("display", "none");
}

function showCalculateConatiner() {
  $("#calculate-conatiner").css("display", "block");
}

function showTabOne() {
  $("#basic-information-box").css("display", "flex");
  $("#second-nav-item").removeClass("active");
  $("#third-nav-item").removeClass("active");
  $("#fourth-nav-item").removeClass("active");
  $("#fifth-nav-item").removeClass("active");
}
function showTabTwo() {
  $("#tab2").css("display", "flex");
  $("#second-nav-item").addClass("active");
  $("#third-nav-item").removeClass("active");
  $("#first-nav-item").removeClass("active");
  $("#fourth-nav-item").removeClass("active");
  $("#fifth-nav-item").removeClass("active");
}
function showTabThree() {
  $("#tab3").css("display", "flex");
  $("#second-nav-item").removeClass("active");
  $("#third-nav-item").addClass("active");
  $("#first-nav-item").removeClass("active");
  $("#fourth-nav-item").removeClass("active");
  $("#fifth-nav-item").removeClass("active");
}
function showTabFour() {
  $("#tab4").css("display", "flex");
  $("#second-nav-item").removeClass("active");
  $("#third-nav-item").removeClass("active");
  $("#first-nav-item").removeClass("active");
  $("#fourth-nav-item").addClass("active");
  $("#fifth-nav-item").removeClass("active");
}
function showTabFive() {
  $("#tab5").css("display", "flex");
  $("#second-nav-item").removeClass("active");
  $("#third-nav-item").removeClass("active");
  $("#first-nav-item").removeClass("active");
  $("#fourth-nav-item").removeClass("active");
  $("#fifth-nav-item").addClass("active");
}
let setOne = [
  "questionSetOne",
  "questionSetTwo",
  "questionSetThree",
  "questionSetFour",
  "questionSetFive",
  "questionSetSix",
  "questionSetSeven",
  "questionSetEight",
];

let setFour = [
  "questionSet4one",
  "questionSet4two",
  "questionSet4three",
  "questionSet4four",
  "questionSet4five",
  "questionSet4six",
  "questionSet4seven",
  "questionSet4eight",
];

$("#bir-next-btn").click(() => {
  if (limited && enaYes && balancePeriod) {
    console.log("Sheet 2");
    hideTabOne();
    showTabTwo();
    $("#questionSetTwo").css("display", "flex");
  }
  if (limited && enaYes && balanceYear) {
    console.log("Sheet 1");
    hideTabOne();
    showTabTwo();
    $("#questionSetOne").css("display", "flex");
  }
  if (limited && enaNo && balancePeriod) {
    console.log("Sheet 4");
    hideTabOne();
    showTabTwo();
    $("#questionSetFour").css("display", "flex");
  }
  if (limited && enaNo && balanceYear) {
    console.log("Sheet 3");
    hideTabOne();
    showTabTwo();
    $("#questionSetThree").css("display", "flex");
  }
  if (surplus && enaYes && balancePeriod) {
    console.log("Sheet 5");
    hideTabOne();
    showTabTwo();
    $("#questionSetFive").css("display", "flex");
  }
  if (surplus && enaYes && balanceYear) {
    console.log("Sheet 6");
    hideTabOne();
    showTabTwo();
    $("#questionSetSix").css("display", "flex");
  }
  if (surplus && enaNo && balancePeriod) {
    console.log("Sheet 8");
    hideTabOne();
    showTabTwo();
    $("#questionSetEight").css("display", "flex");
  }
  if (surplus && enaNo && balanceYear) {
    console.log("Sheet 7");
    hideTabOne();
    showTabTwo();
    $("#questionSetSeven").css("display", "flex");
  }
});

let setTwo = [
  "questionSet2one",
  "questionSet2two",
  "questionSet2three",
  "questionSet2four",
  "questionSet2five",
  "questionSet2six",
  "questionSet2seven",
  "questionSet2eight",
];

const buttonIds = [
  "secondBoxNext1",
  "secondBoxNext2",
  "secondBoxNext3",
  "secondBoxNext4",
  "secondBoxNext5",
  "secondBoxNext6",
  "secondBoxNext7",
  "secondBoxNext8",
];
const buttonIds2 = [
  "thirdBoxNext1",
  "thirdBoxNext2",
  "thirdBoxNext3",
  "thirdBoxNext4",
  "thirdBoxNext5",
  "thirdBoxNext6",
  "thirdBoxNext7",
  "thirdBoxNext8",
];
const buttonIds3 = [
  "fourthBoxNext1",
  "fourthBoxNext2",
  "fourthBoxNext3",
  "fourthBoxNext4",
  "fourthBoxNext5",
  "fourthBoxNext6",
  "fourthBoxNext7",
  "fourthBoxNext8",
];

let setThree = [
  "questionSet3one",
  "questionSet3two",
  "questionSet3three",
  "questionSet3four",
  "questionSet3five",
  "questionSet3six",
  "questionSet3seven",
  "questionSet3eight",
];

buttonIds.forEach((id) => {
  $(`#${id}`).click(() => {
    if (limited && enaYes && balancePeriod) {
      console.log("Sheet 2");
      hideTabOne();
      hideTabTwo();
      showTabThree();
      $("#questionSet2two").css("display", "flex");
    }
    if (limited && enaYes && balanceYear) {
      console.log("Sheet 1");
      hideTabOne();
      hideTabTwo();
      showTabThree();
      $("#questionSet2one").css("display", "flex");
    }
    if (limited && enaNo && balancePeriod) {
      console.log("Sheet 4");
      hideTabOne();
      hideTabTwo();
      showTabThree();
      $("#questionSet2four").css("display", "flex");
    }
    if (limited && enaNo && balanceYear) {
      console.log("Sheet 3");
      hideTabOne();
      hideTabTwo();
      showTabThree();
      $("#questionSet2three").css("display", "flex");
    }
    if (surplus && enaYes && balancePeriod) {
      console.log("Sheet 5");
      hideTabOne();
      hideTabTwo();
      showTabThree();
      $("#questionSet2five").css("display", "flex");
    }
    if (surplus && enaYes && balanceYear) {
      console.log("Sheet 6");
      hideTabOne();
      hideTabTwo();
      showTabThree();
      $("#questionSet2six").css("display", "flex");
    }
    if (surplus && enaNo && balancePeriod) {
      console.log("Sheet 8");
      hideTabOne();
      hideTabTwo();
      showTabThree();
      $("#questionSet2eight").css("display", "flex");
    }
    if (surplus && enaNo && balanceYear) {
      console.log("Sheet 7");
      hideTabOne();
      hideTabTwo();
      showTabThree();
      $("#questionSet2seven").css("display", "flex");
    }
  });
});
buttonIds2.forEach((id) => {
  $(`#${id}`).click(() => {
    if (limited && enaYes && balancePeriod) {
      console.log("Sheet 2");
      hideTabOne();
      hideTabTwo();
      hideTabThree();
      showTabFour();
      $("#questionSet3two").css("display", "flex");
    }
    if (limited && enaYes && balanceYear) {
      console.log("Sheet 1");
      hideTabOne();
      hideTabTwo();
      hideTabThree();
      showTabFour();
      $("#questionSet3one").css("display", "flex");
    }
    if (limited && enaNo && balancePeriod) {
      console.log("Sheet 4");
      hideTabOne();
      hideTabTwo();
      hideTabThree();
      showTabFour();
      $("#questionSet3four").css("display", "flex");
    }
    if (limited && enaNo && balanceYear) {
      console.log("Sheet 3");
      hideTabOne();
      hideTabTwo();
      hideTabThree();
      showTabFour();
      $("#questionSet3three").css("display", "flex");
    }
    if (surplus && enaYes && balancePeriod) {
      console.log("Sheet 5");
      hideTabOne();
      hideTabTwo();
      hideTabThree();
      showTabFour();
      $("#questionSet3five").css("display", "flex");
    }
    if (surplus && enaYes && balanceYear) {
      console.log("Sheet 6");
      hideTabOne();
      hideTabTwo();
      hideTabThree();
      showTabFour();
      $("#questionSet3six").css("display", "flex");
    }
    if (surplus && enaNo && balancePeriod) {
      console.log("Sheet 8");
      hideTabOne();
      hideTabTwo();
      hideTabThree();
      showTabFour();
      $("#questionSet3eight").css("display", "flex");
    }
    if (surplus && enaNo && balanceYear) {
      console.log("Sheet 7");
      hideTabOne();
      hideTabTwo();
      hideTabThree();
      showTabFour();
      $("#questionSet3seven").css("display", "flex");
    }
  });
});

buttonIds3.forEach((id) => {
  $(`#${id}`).click(() => {
    if (limited && enaYes && balancePeriod) {
      console.log("Sheet 2");
      hideTabOne();
      hideTabTwo();
      hideTabThree();
      hideTabFour();
      showTabFive();
      $("#questionSet4two").css("display", "flex");
    }
    if (limited && enaYes && balanceYear) {
      console.log("Sheet 1");
      hideTabOne();
      hideTabTwo();
      hideTabThree();
      hideTabFour();
      showTabFive();
      $("#questionSet4one").css("display", "flex");
    }
    if (limited && enaNo && balancePeriod) {
      console.log("Sheet 4");
      hideTabOne();
      hideTabTwo();
      hideTabThree();
      hideTabFour();
      showTabFive();
      $("#questionSet4four").css("display", "flex");
    }
    if (limited && enaNo && balanceYear) {
      console.log("Sheet 3");
      hideTabOne();
      hideTabTwo();
      hideTabThree();
      hideTabFour();
      showTabFive();
      $("#questionSet4three").css("display", "flex");
    }
    if (surplus && enaYes && balancePeriod) {
      console.log("Sheet 5");
      hideTabOne();
      hideTabTwo();
      hideTabThree();
      hideTabFour();
      showTabFive();
      $("#questionSet4five").css("display", "flex");
    }
    if (surplus && enaYes && balanceYear) {
      console.log("Sheet 6");
      hideTabOne();
      hideTabTwo();
      hideTabThree();
      hideTabFour();
      showTabFive();
      $("#questionSet4six").css("display", "flex");
    }
    if (surplus && enaNo && balancePeriod) {
      console.log("Sheet 8");
      hideTabOne();
      hideTabTwo();
      hideTabThree();
      hideTabFour();
      showTabFive();
      $("#questionSet4eight").css("display", "flex");
    }
    if (surplus && enaNo && balanceYear) {
      console.log("Sheet 7");
      hideTabOne();
      hideTabTwo();
      hideTabThree();
      hideTabFour();
      showTabFive();
      $("#questionSet4seven").css("display", "flex");
    }
  });
});

function formatNumberPDF(valuePDF) {
  console.log("valuePDF", valuePDF);

  valuePDF = valuePDF.toString();
  let isNegative = valuePDF.startsWith("-");

  valuePDF = valuePDF.replace(/[^0-9.]/g, "");

  let [integerPart, decimalPart] = valuePDF.split(".");
  decimalPart = decimalPart ? decimalPart.slice(0, 2) : "00";

  let lastThree = integerPart.slice(-3);
  let otherNumbers = integerPart.slice(0, -3);
  if (otherNumbers !== "") {
    lastThree = "," + lastThree;
  }
  let formattedInteger =
    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

  let formattedValue = formattedInteger + "." + decimalPart.padEnd(2, "0");

  if (isNegative) {
    formattedValue = "-" + formattedValue;
  }

  return formattedValue;
}

function formatNumber(id) {
  const input = document.getElementById(id);
  let value = input.value.replace(/[^\d.]/g, "");
  if ((value.match(/\./g) || []).length > 1) {
    value = value.replace(/(?!^)\./g, "");
  }
  let [integerPart, decimalPart] = value.split(".");
  let lastThree = integerPart.slice(-3);
  let otherNumbers = integerPart.slice(0, -3);
  if (otherNumbers !== "") {
    lastThree = "," + lastThree;
  }
  let formattedValue =
    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  if (decimalPart !== undefined) {
    formattedValue += "." + decimalPart;
  }
  input.value = formattedValue;
}
function safeParseFloat(value) {
  if (typeof value !== "string") {
    value = String(value);
  }
  return isNaN(parseFloat(value.replace(/,/g, "")))
    ? 0
    : parseFloat(value.replace(/,/g, ""));
}

function collectAndSendData1() {
  // Collect all input values by their IDs
  const data = {
    one: safeParseFloat(document.getElementById("one").value),
    two: safeParseFloat(document.getElementById("two").value),
    three: safeParseFloat(document.getElementById("three").value),
    four: safeParseFloat(document.getElementById("four").value),
    five: safeParseFloat(document.getElementById("five").value),

    six: safeParseFloat(document.getElementById("fourtyone").value),
    seven: safeParseFloat(document.getElementById("fourtytwo").value),
    eighth: safeParseFloat(document.getElementById("fourtythree").value),
    ninth: safeParseFloat(document.getElementById("fourtyfour").value),

    ten: safeParseFloat(document.getElementById("seventythree").value),
    Q11: safeParseFloat(document.getElementById("seventyfour").value),

    Q12: safeParseFloat(document.getElementById("nintyone").value),
    Q13: safeParseFloat(document.getElementById("nintytwo").value),
    Q14: safeParseFloat(document.getElementById("nintythree").value),
    Q15: safeParseFloat(document.getElementById("nintyfour").value),
    Q16: safeParseFloat(document.getElementById("nintyfive").value),
  };
  let exemptSupplyCurrent = data.eighth + data.ninth;
  let exemptSupplyProposed = data.eighth;
  let totalSupplyCurrent = data.six + data.seven + data.eighth + data.ninth;
  let totalSupplyProposed =
    data.six + data.seven + data.eighth + data.two * data.five;
  let ratioCurrent = (exemptSupplyCurrent / totalSupplyCurrent) * 100;
  let ratioProposed = (exemptSupplyProposed / totalSupplyProposed) * 100;
  let commonITCCurrent = data.ten + data.Q11 + data.Q12 + data.Q13 + data.Q14;
  let commonITCCPrposed = data.ten + data.Q11;

  let reversalCurrent = (commonITCCurrent * ratioCurrent) / 100;
  let reversalProposed = (commonITCCPrposed * ratioProposed) / 100;
  let ReductioninRule42Current = reversalCurrent - reversalProposed;
  let IncrementalRevenueSales = (data.five - data.four) * data.two;
  let profit = ReductioninRule42Current + IncrementalRevenueSales;
  let penalty = data.Q15;
  let anyOther = data.Q16;
  let total = penalty + anyOther;
  let addCost = total;
  let netProfit = profit - addCost;
  console.log("1) Exempt Supply Current", Math.round(exemptSupplyCurrent));
  console.log("2) Exempt Supply Proposed", Math.round(exemptSupplyProposed));
  console.log("3) Total Supply Current", Math.round(totalSupplyCurrent));
  console.log("4) Total Supply Proposed", Math.round(totalSupplyProposed));
  console.log("5) Ratio Current", Math.round(ratioCurrent));
  console.log("6) Ratio Proposed", Math.round(ratioProposed));
  console.log("7) Common ITC Current", Math.round(commonITCCurrent));
  console.log("8) Common ITC Proposed", Math.round(commonITCCPrposed));
  console.log("9) Reversal Current", Math.round(reversalCurrent));
  console.log("10) Reversal Proposed", Math.round(reversalProposed));
  console.log(
    "11) Reduction in Rule 42 Current",
    Math.round(ReductioninRule42Current)
  );
  console.log(
    "12) Incremental Revenue Sales",
    Math.round(IncrementalRevenueSales)
  );
  console.log("13) Profit", Math.round(profit));
  console.log("14) Penalty", Math.round(penalty));
  console.log("15) Any Other", Math.round(anyOther));
  console.log("16) Total", Math.round(total));
  console.log("17) Additional Cost", Math.round(addCost));
  console.log("18) Net Profit", Math.round(netProfit));

  showCalculateConatiner();
  updatePDFAndDownload(
    Math.round(exemptSupplyCurrent),
    Math.round(exemptSupplyProposed),
    Math.round(totalSupplyCurrent),
    Math.round(totalSupplyProposed),
    Math.round(ratioCurrent),
    Math.round(ratioProposed),
    Math.round(commonITCCurrent),
    Math.round(commonITCCPrposed),
    Math.round(reversalCurrent),
    Math.round(reversalProposed),
    Math.round(ReductioninRule42Current),
    Math.round(IncrementalRevenueSales),
    Math.round(profit),
    Math.round(addCost),
    Math.round(netProfit)
  );
}
function collectAndSendData2() {
  // Collect all input values by their IDs
  const data = {
    one: safeParseFloat(document.getElementById("six").value),
    one2: safeParseFloat(document.getElementById("six2").value),
    two: safeParseFloat(document.getElementById("seven").value),
    two2: safeParseFloat(document.getElementById("seven2").value),
    three: safeParseFloat(document.getElementById("eight").value),
    three2: safeParseFloat(document.getElementById("eight2").value),
    four: safeParseFloat(document.getElementById("nine").value),
    five: safeParseFloat(document.getElementById("ten").value),

    six: safeParseFloat(document.getElementById("fourtfive").value),
    six2: safeParseFloat(document.getElementById("fourtfive2").value),
    seven: safeParseFloat(document.getElementById("fourtysix").value),
    seven2: safeParseFloat(document.getElementById("fourtysix2").value),
    eighth: safeParseFloat(document.getElementById("fourtyseven").value),
    eighth2: safeParseFloat(document.getElementById("fourtyseven2").value),
    ninth: safeParseFloat(document.getElementById("fourtyeight").value),
    ninth2: safeParseFloat(document.getElementById("fourtyeight2").value),

    ten: safeParseFloat(document.getElementById("seventyfive").value),
    ten2: safeParseFloat(document.getElementById("seventyfive2").value),
    Q11: safeParseFloat(document.getElementById("seventysix").value),
    Q112: safeParseFloat(document.getElementById("seventysix2").value),

    Q12: safeParseFloat(document.getElementById("nintysix").value),
    Q122: safeParseFloat(document.getElementById("nintysix2").value),
    Q13: safeParseFloat(document.getElementById("nintyseven").value),
    Q132: safeParseFloat(document.getElementById("nintyseven2").value),
    Q14: safeParseFloat(document.getElementById("nintyeight").value),
    Q142: safeParseFloat(document.getElementById("nintyeight2").value),
    Q15: safeParseFloat(document.getElementById("nintynine").value),
    Q16: safeParseFloat(document.getElementById("hundred").value),
  };
  let exemptSupplyUptodate = data.eighth2 + data.ninth2;
  let exemptSupplySaletoliqur = data.two * data.four + data.eighth;
  let exemptTotal1 = exemptSupplyUptodate + exemptSupplySaletoliqur;
  let exemptSupplyNotSaletoliquir = data.eighth;
  let exemptTotal2 = exemptSupplyUptodate + exemptSupplyNotSaletoliquir;

  let exemptSupplyuptodate =
    data.six2 + data.seven2 + data.eighth2 + data.ninth2;
  let totalSupplySaletoliquir =
    data.six + data.seven + data.eighth + data.ninth;
  let totalSupply1 = exemptSupplyuptodate + totalSupplySaletoliquir;
  let totalSupplynotsaletoliquir =
    data.six + data.seven + data.eighth + data.two * data.five;
  let totalSupply2 = totalSupplynotsaletoliquir + exemptSupplyuptodate;

  let ratioCurrent = (exemptTotal1 / totalSupply1) * 100;
  let ratioProposed = (exemptTotal2 / totalSupply2) * 100;

  let commonITCUptodate =
    data.ten2 + data.Q112 + data.Q122 + data.Q132 + data.Q142;
  let commonITCSaletoliquir =
    data.ten + data.Q11 + data.Q12 + data.Q13 + data.Q14;
  let commonITCCPtotal1 = commonITCUptodate + commonITCSaletoliquir;
  let commonITCCPtotal2 = commonITCUptodate + (data.ten + data.Q11);

  let reversalCurrent = (commonITCCPtotal1 * ratioCurrent) / 100;
  let reversalProposed = (commonITCCPtotal2 * ratioProposed) / 100;

  let ReductioninRule42Current = reversalCurrent - reversalProposed;
  let IncrementalRevenueSales = (data.five - data.four) * data.two;
  let profit = ReductioninRule42Current + IncrementalRevenueSales;
  let penalty = data.Q15;
  let anyOther = data.Q16;
  let total = penalty + anyOther;
  let addCost = total;
  let netProfit = profit - addCost;

  console.log(
    "1) Exempt Supply Current Up to Date: ",
    Math.round(exemptSupplyUptodate)
  );
  console.log(
    "2) Exempt Supply Current Sold to Liquor: ",
    Math.round(exemptSupplySaletoliqur)
  );
  console.log(
    "3) Total Value up to Date & Current sold to Liquor: ",
    Math.round(exemptTotal1)
  );
  console.log(
    "4) Exempt Supply Current not Sold to Liquor: ",
    Math.round(exemptSupplyNotSaletoliquir)
  );
  console.log(
    "5) Total Value up to Date & Current not sold to Liquor: ",
    Math.round(exemptTotal2)
  );

  console.log(
    "6) Exempt Supply Up to Date: ",
    Math.round(exemptSupplyuptodate)
  );
  console.log(
    "7) Exempt Supply Current sold to Liquor: ",
    Math.round(totalSupplySaletoliquir)
  );
  console.log(
    "8) Total Supply Current & up to date: ",
    Math.round(totalSupply1)
  );
  console.log(
    "9) Total Supply Proposed not Sold to Liquor: ",
    Math.round(totalSupplynotsaletoliquir)
  );
  console.log(
    "10) Total Supply Proposed & Not sold to Liquor: ",
    Math.round(totalSupply2)
  );

  console.log("11) Ratio Current: ", Math.round(ratioCurrent));
  console.log("12) Ratio Proposed: ", Math.round(ratioProposed));

  console.log("13) Common ITC Up to date: ", Math.round(commonITCUptodate));
  console.log(
    "14) Common ITC Sale to Liquor: ",
    Math.round(commonITCSaletoliquir)
  );
  console.log(
    "15) Total Common ITC Sale to Liquor: ",
    Math.round(commonITCCPtotal1)
  );
  console.log(
    "16) Total Common ITC Not Sold to Liquor: ",
    Math.round(commonITCCPtotal2)
  );

  console.log("17) Reversal Current", Math.round(reversalCurrent));
  console.log("18) Reversal Proposed", Math.round(reversalProposed));

  console.log(
    "19) Reduction in Rule 42 Current",
    Math.round(ReductioninRule42Current)
  );
  console.log(
    "20) Incremental Revenue Sales",
    Math.round(IncrementalRevenueSales)
  );
  console.log("21) Profit", Math.round(profit));
  console.log("22) Additional Cost", Math.round(addCost));
  console.log("23) Net Profit", Math.round(netProfit));
  showCalculateConatiner();
  updatePDFAndDownload2(
    exemptSupplyUptodate,
    exemptSupplySaletoliqur,
    exemptTotal1,
    exemptSupplyNotSaletoliquir,
    exemptTotal2,
    exemptSupplyuptodate,
    totalSupplySaletoliquir,
    totalSupply1,
    totalSupplynotsaletoliquir,
    totalSupply2,
    ratioCurrent,
    ratioProposed,
    commonITCUptodate,
    commonITCSaletoliquir,
    commonITCCPtotal1,
    commonITCCPtotal2,
    reversalCurrent,
    reversalProposed,
    ReductioninRule42Current,
    IncrementalRevenueSales,
    profit,
    addCost,
    netProfit
  );
}
function collectAndSendData3() {
  // Collect all input values by their IDs
  const data = {
    one: safeParseFloat(document.getElementById("eleone").value),
    two: safeParseFloat(document.getElementById("twelve").value),
    three: safeParseFloat(document.getElementById("thirteen").value),
    four: safeParseFloat(document.getElementById("fourteen").value),
    five: safeParseFloat(document.getElementById("fifteen").value),

    six: safeParseFloat(document.getElementById("fourtynine").value),
    seven: safeParseFloat(document.getElementById("fifty").value),
    eighth: safeParseFloat(document.getElementById("fiftyone").value),
    ninth: safeParseFloat(document.getElementById("fiftytwo").value),

    ten: safeParseFloat(document.getElementById("seventyseven").value),
    Q11: safeParseFloat(document.getElementById("seventyeight").value),

    Q12: safeParseFloat(document.getElementById("hundredone").value),
    Q13: safeParseFloat(document.getElementById("hundredtwo").value),
    Q14: safeParseFloat(document.getElementById("hundredthree").value),
    Q15: safeParseFloat(document.getElementById("hundredfour").value),
    Q16: safeParseFloat(document.getElementById("hundredfive").value),
  };
  let exemptSupplyCurrent = data.eighth;
  let exemptSupplyProposed = data.eighth + data.ninth;
  let totalSupplyCurrent =
    data.six + data.seven + data.eighth + data.two * data.five;
  let totalSupplyProposed = data.six + data.seven + data.eighth + data.ninth;

  let ratioCurrent = (exemptSupplyCurrent / totalSupplyCurrent) * 100;
  let ratioProposed = (exemptSupplyProposed / totalSupplyProposed) * 100;

  let commonITCCurrent = data.ten + data.Q11;
  let commonITCCPrposed = data.ten + data.Q11 + data.Q12 + data.Q13 + data.Q14;

  let reversalCurrent = (commonITCCurrent * ratioCurrent) / 100;
  let reversalProposed = (commonITCCPrposed * ratioProposed) / 100;

  let ReductioninRule42Current = reversalProposed - reversalCurrent;

  let IncrementalRevenueSales = (data.four - data.five) * data.two;

  let profit = IncrementalRevenueSales - ReductioninRule42Current;

  let penalty = data.Q15;
  let anyOther = data.Q16;
  let total = penalty + anyOther;
  let addCost = total;
  let netProfit = profit - addCost;
  console.log("1) Exempt Supply Current", Math.round(exemptSupplyCurrent));
  console.log("2) Exempt Supply Proposed", Math.round(exemptSupplyProposed));
  console.log("3) Total Supply Current", Math.round(totalSupplyCurrent));
  console.log("4) Total Supply Proposed", Math.round(totalSupplyProposed));
  console.log("5) Ratio Current", Math.round(ratioCurrent));
  console.log("6) Ratio Proposed", Math.round(ratioProposed));
  console.log("7) Common ITC Current", Math.round(commonITCCurrent));
  console.log("8) Common ITC Proposed", Math.round(commonITCCPrposed));
  console.log("9) Reversal Current", Math.round(reversalCurrent));
  console.log("10) Reversal Proposed", Math.round(reversalProposed));
  console.log(
    "11) Reduction in Rule 42 Current",
    Math.round(ReductioninRule42Current)
  );
  console.log(
    "12) Incremental Revenue Sales",
    Math.round(IncrementalRevenueSales)
  );
  console.log("13) Profit", Math.round(profit));
  console.log("14) Penalty", Math.round(penalty));
  console.log("15) Any Other", Math.round(anyOther));
  console.log("16) Total", Math.round(total));
  console.log("17) Additional Cost", Math.round(addCost));
  console.log("18) Net Profit", Math.round(netProfit));

  showCalculateConatiner();
  updatePDFAndDownload(
    Math.round(exemptSupplyCurrent),
    Math.round(exemptSupplyProposed),
    Math.round(totalSupplyCurrent),
    Math.round(totalSupplyProposed),
    Math.round(ratioCurrent),
    Math.round(ratioProposed),
    Math.round(commonITCCurrent),
    Math.round(commonITCCPrposed),
    Math.round(reversalCurrent),
    Math.round(reversalProposed),
    Math.round(ReductioninRule42Current),
    Math.round(IncrementalRevenueSales),
    Math.round(profit),
    Math.round(addCost),
    Math.round(netProfit)
  );
}
function collectAndSendData4() {
  // Collect all input values by their IDs
  const data = {
    one: safeParseFloat(document.getElementById("sixteen").value),
    one2: safeParseFloat(document.getElementById("sixteen2").value),
    two: safeParseFloat(document.getElementById("seventeen").value),
    three: safeParseFloat(document.getElementById("eighteen").value),
    three2: safeParseFloat(document.getElementById("eighteen2").value),
    four: safeParseFloat(document.getElementById("nineteen").value),
    five: safeParseFloat(document.getElementById("twenty").value),

    six: safeParseFloat(document.getElementById("fiftythree").value),
    six2: safeParseFloat(document.getElementById("fiftythree2").value),
    seven: safeParseFloat(document.getElementById("fiftyfour").value),
    seven2: safeParseFloat(document.getElementById("fiftyfour2").value),
    eighth: safeParseFloat(document.getElementById("fiftyfive").value),
    eighth2: safeParseFloat(document.getElementById("fiftyfive2").value),
    ninth: safeParseFloat(document.getElementById("fiftysix").value),

    ten: safeParseFloat(document.getElementById("seventynine").value),
    ten2: safeParseFloat(document.getElementById("seventynine2").value),
    Q11: safeParseFloat(document.getElementById("eighty").value),
    Q112: safeParseFloat(document.getElementById("eighty2").value),

    Q12: safeParseFloat(document.getElementById("hundredsix").value),
    Q122: safeParseFloat(document.getElementById("hundredsix2").value),
    Q13: safeParseFloat(document.getElementById("hundredseven").value),
    Q132: safeParseFloat(document.getElementById("hundredseven2").value),
    Q14: safeParseFloat(document.getElementById("hundredeight").value),
    Q142: safeParseFloat(document.getElementById("hundredeight2").value),
    Q15: safeParseFloat(document.getElementById("hundrednine").value),
    Q16: safeParseFloat(document.getElementById("hundredten").value),
  };
  let exemptSupplyuptodate = data.eighth2;
  let exemptSupplyProposedsalestoliquor = data.two * data.four + data.eighth;
  let totalexmptsupply1 =
    exemptSupplyuptodate + exemptSupplyProposedsalestoliquor;
  let exemptSupplyProposednotsalestoliquor = data.eighth;
  let totalvalue2 = exemptSupplyProposednotsalestoliquor + exemptSupplyuptodate;

  let totalSupplyuptodate = data.six2 + data.seven2 + data.eighth2;
  let totalSupplyifsaletoliquir =
    data.six + data.seven + data.eighth + data.ninth;
  let totalSupply1 = totalSupplyuptodate + totalSupplyifsaletoliquir;
  let totalSupplyifnotsaletoliquir =
    data.six + data.seven + data.eighth + data.two * data.five;
  let totalSupply2 = totalSupplyuptodate + totalSupplyifnotsaletoliquir;

  let ratioCurrent = (totalexmptsupply1 / totalSupply1) * 100;
  let ratioProposed = (totalvalue2 / totalSupply2) * 100;

  let commonITCUptodate = data.ten2 + data.Q112;
  let commonITCifsaletoliquir =
    data.ten + data.Q11 + data.Q12 + data.Q13 + data.Q14;
  console.log(
    "data.Q11 + data.Q12 + data.Q13 + data.Q14 + data.Q15;",
    data.ten,
    data.Q11,
    data.Q12,
    data.Q13,
    data.Q14,
    data.Q15
  );
  let totalCommonITC1 = commonITCifsaletoliquir + commonITCUptodate;
  let commonITCnotsaletoliquor = data.ten + data.Q11;
  let commonITCCPtotal2 = commonITCnotsaletoliquor + commonITCUptodate;

  let reversalCurrent = (totalCommonITC1 * ratioCurrent) / 100;
  let reversalProposed = (commonITCCPtotal2 * ratioProposed) / 100;

  let ReductioninRule42Current = reversalCurrent - reversalProposed;
  let IncrementalRevenueSales = (data.four - data.five) * data.two;

  let profit = IncrementalRevenueSales - ReductioninRule42Current;
  let penalty = data.Q15;
  let anyOther = data.Q16;
  let total = penalty + anyOther;
  let addCost = total;
  let netProfit = profit - addCost;
  console.log("1)Exempt Supply Upto Date: ", exemptSupplyuptodate);
  console.log(
    "2) Exempt Supply Sale to Liquir: ",
    exemptSupplyProposedsalestoliquor
  );
  console.log("3) Total Exempt Supply: ", totalexmptsupply1);
  console.log(
    "4) Exempt Supply Not Sale to Liquir:",
    exemptSupplyProposednotsalestoliquor
  );
  console.log("5) Exempt Supply Total:", totalvalue2);

  console.log("6) Total Supply Uptodate:", totalSupplyuptodate);
  console.log("7) Total Supply Sale to Liqure:", totalSupplyifsaletoliquir);
  console.log("8) Total Supply 1:", totalSupply1);
  console.log(
    "9) Total Supply Not Sale to Liquir:",
    totalSupplyifnotsaletoliquir
  );
  console.log("10) Total Supply 2:", totalSupply2);

  console.log("11) Ratio Current", ratioCurrent);
  console.log("12) Ratio Proposed", ratioProposed);

  console.log("13) Common ITC Upto Date: ", commonITCUptodate);
  console.log("14) Common ITC Sale to Liquir: ", commonITCifsaletoliquir);
  console.log("15) Common ITC Total: ", totalCommonITC1);
  console.log("16) Common ITC Not Sale to liquir: ", commonITCnotsaletoliquor);
  console.log("17) Common ITC Total2: ", commonITCCPtotal2);

  console.log("18) Reversal Current", reversalCurrent);
  console.log("19) Reversal Proposed", reversalProposed);
  console.log("20) Reductionin Rule42 Current", ReductioninRule42Current);
  console.log("21) IncrementalRevenueSales", IncrementalRevenueSales);
  console.log("22) Profit", profit);
  console.log("23) Additional Cost", addCost);
  console.log("24) NetProfit", netProfit);
  showCalculateConatiner();
  updatePDFAndDownload3(
    exemptSupplyuptodate,
    exemptSupplyProposedsalestoliquor,
    totalexmptsupply1,
    exemptSupplyProposednotsalestoliquor,
    totalvalue2,
    totalSupplyuptodate,
    totalSupplyifsaletoliquir,
    totalSupply1,
    totalSupplyifnotsaletoliquir,
    totalSupply2,
    ratioCurrent,
    ratioProposed,
    commonITCUptodate,
    commonITCifsaletoliquir,
    totalCommonITC1,
    commonITCnotsaletoliquor,
    commonITCCPtotal2,
    reversalCurrent,
    reversalProposed,
    ReductioninRule42Current,
    IncrementalRevenueSales,
    profit,
    addCost,
    netProfit
  );
}
function collectAndSendData5() {
  // Collect all input values by their IDs
  const data = {
    one: safeParseFloat(document.getElementById("twentyone").value),
    one2: safeParseFloat(document.getElementById("twentyone2").value),
    two: safeParseFloat(document.getElementById("twentytwo").value),
    two2: safeParseFloat(document.getElementById("twentytwo2").value),
    three: safeParseFloat(document.getElementById("twentythree").value),
    three2: safeParseFloat(document.getElementById("twentythree2").value),
    four: safeParseFloat(document.getElementById("twentyfour").value),
    five: safeParseFloat(document.getElementById("twentyfive").value),

    six: safeParseFloat(document.getElementById("fiftyseven").value),
    six2: safeParseFloat(document.getElementById("fiftyseven2").value),
    seven: safeParseFloat(document.getElementById("fiftyeight").value),
    seven2: safeParseFloat(document.getElementById("fiftyeight2").value),
    eighth: safeParseFloat(document.getElementById("fiftynine").value),
    eighth2: safeParseFloat(document.getElementById("fiftynine2").value),
    ninth: safeParseFloat(document.getElementById("sixty").value),
    ninth2: safeParseFloat(document.getElementById("sixty2").value),

    ten: safeParseFloat(document.getElementById("eightyone").value),
    ten2: safeParseFloat(document.getElementById("eightyone2").value),
    Q11: safeParseFloat(document.getElementById("eightytwo").value),
    Q112: safeParseFloat(document.getElementById("eightytwo2").value),

    Q12: safeParseFloat(document.getElementById("hundredeleone").value),
    Q122: safeParseFloat(document.getElementById("hundredeleone2").value),
    Q13: safeParseFloat(document.getElementById("hundredtwelve").value),
    Q132: safeParseFloat(document.getElementById("hundredtwelve2").value),
    Q14: safeParseFloat(document.getElementById("hundredthirteen").value),
    Q142: safeParseFloat(document.getElementById("hundredthirteen2").value),
    Q15: safeParseFloat(document.getElementById("hundredfourteen").value),
    Q16: safeParseFloat(document.getElementById("hundredfifteen").value),
  };
  let exemptSupplyUptodate = data.eighth2 + data.ninth2;
  let exemptSupplySaletoliqur = data.two * data.four + data.eighth;
  let exemptTotal1 = exemptSupplyUptodate + exemptSupplySaletoliqur;
  let exemptSupplyNotSaletoliquir = data.eighth;
  let exemptTotal2 = exemptSupplyUptodate + exemptSupplyNotSaletoliquir;

  let exemptSupplyuptodate =
    data.six2 + data.seven2 + data.eighth2 + data.ninth2;
  let totalSupplySaletoliquir =
    data.six + data.seven + data.eighth + data.ninth;
  let totalSupply1 = exemptSupplyuptodate + totalSupplySaletoliquir;
  let totalSupplynotsaletoliquir =
    data.six + data.seven + data.eighth + data.two * data.five;
  let totalSupply2 = totalSupplynotsaletoliquir + exemptSupplyuptodate;

  let ratioCurrent = (exemptTotal1 / totalSupply1) * 100;
  let ratioProposed = (exemptTotal2 / totalSupply2) * 100;

  let commonITCUptodate =
    data.ten2 + data.Q112 + data.Q122 + data.Q132 + data.Q142;
  let commonITCSaletoliquir =
    data.ten + data.Q11 + data.Q12 + data.Q13 + data.Q14;
  let commonITCCPtotal1 = commonITCUptodate + commonITCSaletoliquir;
  let commonITCCPtotal2 = commonITCUptodate + (data.ten + data.Q11);

  let reversalCurrent = (commonITCCPtotal1 * ratioCurrent) / 100;
  let reversalProposed = (commonITCCPtotal2 * ratioProposed) / 100;

  let ReductioninRule42Current = reversalCurrent - reversalProposed;
  let IncrementalRevenueSales = (data.five - data.four) * data.two;
  let profit = ReductioninRule42Current + IncrementalRevenueSales;
  let penalty = data.Q15;
  let anyOther = data.Q16;
  let total = penalty + anyOther;
  let addCost = total;
  let netProfit = profit - addCost;

  console.log(
    "1) Exempt Supply Current Up to Date: ",
    Math.round(exemptSupplyUptodate)
  );
  console.log(
    "2) Exempt Supply Current Sold to Liquor: ",
    Math.round(exemptSupplySaletoliqur)
  );
  console.log(
    "3) Total Value up to Date & Current sold to Liquor: ",
    Math.round(exemptTotal1)
  );
  console.log(
    "4) Exempt Supply Current not Sold to Liquor: ",
    Math.round(exemptSupplyNotSaletoliquir)
  );
  console.log(
    "5) Total Value up to Date & Current not sold to Liquor: ",
    Math.round(exemptTotal2)
  );

  console.log(
    "6) Exempt Supply Up to Date: ",
    Math.round(exemptSupplyuptodate)
  );
  console.log(
    "7) Exempt Supply Current sold to Liquor: ",
    Math.round(totalSupplySaletoliquir)
  );
  console.log(
    "8) Total Supply Current & up to date: ",
    Math.round(totalSupply1)
  );
  console.log(
    "9) Total Supply Proposed not Sold to Liquor: ",
    Math.round(totalSupplynotsaletoliquir)
  );
  console.log(
    "10) Total Supply Proposed & Not sold to Liquor: ",
    Math.round(totalSupply2)
  );

  console.log("11) Ratio Current: ", Math.round(ratioCurrent));
  console.log("12) Ratio Proposed: ", Math.round(ratioProposed));

  console.log("13) Common ITC Up to date: ", Math.round(commonITCUptodate));
  console.log(
    "14) Common ITC Sale to Liquor: ",
    Math.round(commonITCSaletoliquir)
  );
  console.log(
    "15) Total Common ITC Sale to Liquor: ",
    Math.round(commonITCCPtotal1)
  );
  console.log(
    "16) Total Common ITC Not Sold to Liquor: ",
    Math.round(commonITCCPtotal2)
  );

  console.log("17) Reversal Current", Math.round(reversalCurrent));
  console.log("18) Reversal Proposed", Math.round(reversalProposed));

  console.log(
    "19) Reduction in Rule 42 Current",
    Math.round(ReductioninRule42Current)
  );
  console.log(
    "20) Incremental Revenue Sales",
    Math.round(IncrementalRevenueSales)
  );
  console.log("21) Profit", Math.round(profit));
  console.log("22) Additional Cost", Math.round(addCost));
  console.log("23) Net Profit", Math.round(netProfit));
  showCalculateConatiner();
  updatePDFAndDownload2(
    exemptSupplyUptodate,
    exemptSupplySaletoliqur,
    exemptTotal1,
    exemptSupplyNotSaletoliquir,
    exemptTotal2,
    exemptSupplyuptodate,
    totalSupplySaletoliquir,
    totalSupply1,
    totalSupplynotsaletoliquir,
    totalSupply2,
    ratioCurrent,
    ratioProposed,
    commonITCUptodate,
    commonITCSaletoliquir,
    commonITCCPtotal1,
    commonITCCPtotal2,
    reversalCurrent,
    reversalProposed,
    ReductioninRule42Current,
    IncrementalRevenueSales,
    profit,
    addCost,
    netProfit
  );
}
function collectAndSendData6() {
  // Collect all input values by their IDs
  const data = {
    one: safeParseFloat(document.getElementById("twentysix").value),
    two: safeParseFloat(document.getElementById("twentyseven").value),
    three: safeParseFloat(document.getElementById("twentyeight").value),
    four: safeParseFloat(document.getElementById("twentynine").value),
    five: safeParseFloat(document.getElementById("thirty").value),

    six: safeParseFloat(document.getElementById("sixtyone").value),
    seven: safeParseFloat(document.getElementById("sixtytwo").value),
    eighth: safeParseFloat(document.getElementById("sixtythree").value),
    ninth: safeParseFloat(document.getElementById("sixtyfour").value),

    ten: safeParseFloat(document.getElementById("eightythree").value),
    Q11: safeParseFloat(document.getElementById("eightytfour").value),

    Q12: safeParseFloat(document.getElementById("hundredsixteen").value),
    Q13: safeParseFloat(document.getElementById("hundredseventeen").value),
    Q14: safeParseFloat(document.getElementById("hundredeighteen").value),
    Q15: safeParseFloat(document.getElementById("hundrednineteen").value),
    Q16: safeParseFloat(document.getElementById("hundredtwenty").value),
  };
  let exemptSupplyCurrent = data.eighth + data.ninth;
  let exemptSupplyProposed = data.eighth;
  let totalSupplyCurrent = data.six + data.seven + data.eighth + data.ninth;
  let totalSupplyProposed =
    data.six + data.seven + data.eighth + data.two * data.five;
  let ratioCurrent = (exemptSupplyCurrent / totalSupplyCurrent) * 100;
  let ratioProposed = (exemptSupplyProposed / totalSupplyProposed) * 100;
  let commonITCCurrent = data.ten + data.Q11 + data.Q12 + data.Q13 + data.Q14;
  let commonITCCPrposed = data.ten + data.Q11;

  let reversalCurrent = (commonITCCurrent * ratioCurrent) / 100;
  let reversalProposed = (commonITCCPrposed * ratioProposed) / 100;
  let ReductioninRule42Current = reversalCurrent - reversalProposed;
  let IncrementalRevenueSales = (data.five - data.four) * data.two;
  let profit = ReductioninRule42Current + IncrementalRevenueSales;
  let penalty = data.Q15;
  let anyOther = data.Q16;
  let total = penalty + anyOther;
  let addCost = total;
  let netProfit = profit - addCost;
  console.log("1) Exempt Supply Current", Math.round(exemptSupplyCurrent));
  console.log("2) Exempt Supply Proposed", Math.round(exemptSupplyProposed));
  console.log("3) Total Supply Current", Math.round(totalSupplyCurrent));
  console.log("4) Total Supply Proposed", Math.round(totalSupplyProposed));
  console.log("5) Ratio Current", Math.round(ratioCurrent));
  console.log("6) Ratio Proposed", Math.round(ratioProposed));
  console.log("7) Common ITC Current", Math.round(commonITCCurrent));
  console.log("8) Common ITC Proposed", Math.round(commonITCCPrposed));
  console.log("9) Reversal Current", Math.round(reversalCurrent));
  console.log("10) Reversal Proposed", Math.round(reversalProposed));
  console.log(
    "11) Reduction in Rule 42 Current",
    Math.round(ReductioninRule42Current)
  );
  console.log(
    "12) Incremental Revenue Sales",
    Math.round(IncrementalRevenueSales)
  );
  console.log("13) Profit", Math.round(profit));
  console.log("14) Penalty", Math.round(penalty));
  console.log("15) Any Other", Math.round(anyOther));
  console.log("16) Total", Math.round(total));
  console.log("17) Additional Cost", Math.round(addCost));
  console.log("18) Net Profit", Math.round(netProfit));

  showCalculateConatiner();
  updatePDFAndDownload(
    Math.round(exemptSupplyCurrent),
    Math.round(exemptSupplyProposed),
    Math.round(totalSupplyCurrent),
    Math.round(totalSupplyProposed),
    Math.round(ratioCurrent),
    Math.round(ratioProposed),
    Math.round(commonITCCurrent),
    Math.round(commonITCCPrposed),
    Math.round(reversalCurrent),
    Math.round(reversalProposed),
    Math.round(ReductioninRule42Current),
    Math.round(IncrementalRevenueSales),
    Math.round(profit),
    Math.round(addCost),
    Math.round(netProfit)
  );
}
function collectAndSendData7() {
  // Collect all input values by their IDs
  const data = {
    one: safeParseFloat(document.getElementById("thirtyone").value),
    two: safeParseFloat(document.getElementById("thirtytwo").value),
    three: safeParseFloat(document.getElementById("thirtythree").value),
    four: safeParseFloat(document.getElementById("thirtyfour").value),
    five: safeParseFloat(document.getElementById("thirtyfive").value),

    six: safeParseFloat(document.getElementById("sixtyfive").value),
    seven: safeParseFloat(document.getElementById("sixtysix").value),
    eighth: safeParseFloat(document.getElementById("sixtyseven").value),
    ninth: safeParseFloat(document.getElementById("sixtyeight").value),

    ten: safeParseFloat(document.getElementById("eightytfive").value),
    Q11: safeParseFloat(document.getElementById("eightytsix").value),

    Q12: safeParseFloat(document.getElementById("hundredtwentyone").value),
    Q13: safeParseFloat(document.getElementById("hundredtwentytwo").value),
    Q14: safeParseFloat(document.getElementById("hundredtwentythree").value),
    Q15: safeParseFloat(document.getElementById("hundredtwentyfour").value),
    Q16: safeParseFloat(document.getElementById("hundredtwentyfive").value),
  };
  let exemptSupplyCurrent = data.eighth;
  let exemptSupplyProposed = data.eighth + data.ninth;
  let totalSupplyCurrent =
    data.six + data.seven + data.eighth + data.two * data.five;
  let totalSupplyProposed = data.six + data.seven + data.eighth + data.ninth;

  let ratioCurrent = (exemptSupplyCurrent / totalSupplyCurrent) * 100;
  let ratioProposed = (exemptSupplyProposed / totalSupplyProposed) * 100;

  let commonITCCurrent = data.ten + data.Q11;
  let commonITCCPrposed = data.ten + data.Q11 + data.Q12 + data.Q13 + data.Q14;

  let reversalCurrent = (commonITCCurrent * ratioCurrent) / 100;
  let reversalProposed = (commonITCCPrposed * ratioProposed) / 100;

  let ReductioninRule42Current = reversalProposed - reversalCurrent;

  let IncrementalRevenueSales = (data.four - data.five) * data.two;

  let profit = IncrementalRevenueSales - ReductioninRule42Current;

  let penalty = data.Q15;
  let anyOther = data.Q16;
  let total = penalty + anyOther;
  let addCost = total;
  let netProfit = profit - addCost;
  console.log("1) Exempt Supply Current", Math.round(exemptSupplyCurrent));
  console.log("2) Exempt Supply Proposed", Math.round(exemptSupplyProposed));
  console.log("3) Total Supply Current", Math.round(totalSupplyCurrent));
  console.log("4) Total Supply Proposed", Math.round(totalSupplyProposed));
  console.log("5) Ratio Current", Math.round(ratioCurrent));
  console.log("6) Ratio Proposed", Math.round(ratioProposed));
  console.log("7) Common ITC Current", Math.round(commonITCCurrent));
  console.log("8) Common ITC Proposed", Math.round(commonITCCPrposed));
  console.log("9) Reversal Current", Math.round(reversalCurrent));
  console.log("10) Reversal Proposed", Math.round(reversalProposed));
  console.log(
    "11) Reduction in Rule 42 Current",
    Math.round(ReductioninRule42Current)
  );
  console.log(
    "12) Incremental Revenue Sales",
    Math.round(IncrementalRevenueSales)
  );
  console.log("13) Profit", Math.round(profit));
  console.log("14) Penalty", Math.round(penalty));
  console.log("15) Any Other", Math.round(anyOther));
  console.log("16) Total", Math.round(total));
  console.log("17) Additional Cost", Math.round(addCost));
  console.log("18) Net Profit", Math.round(netProfit));

  showCalculateConatiner();
  updatePDFAndDownload(
    Math.round(exemptSupplyCurrent),
    Math.round(exemptSupplyProposed),
    Math.round(totalSupplyCurrent),
    Math.round(totalSupplyProposed),
    Math.round(ratioCurrent),
    Math.round(ratioProposed),
    Math.round(commonITCCurrent),
    Math.round(commonITCCPrposed),
    Math.round(reversalCurrent),
    Math.round(reversalProposed),
    Math.round(ReductioninRule42Current),
    Math.round(IncrementalRevenueSales),
    Math.round(profit),
    Math.round(addCost),
    Math.round(netProfit)
  );
}
function collectAndSendData8() {
  // Collect all input values by their IDs
  const data = {
    one: safeParseFloat(document.getElementById("thirtysix").value),
    one2: safeParseFloat(document.getElementById("thirtysix2").value),
    two: safeParseFloat(document.getElementById("thirtyseven").value),
    three: safeParseFloat(document.getElementById("thirtyeight").value),
    three2: safeParseFloat(document.getElementById("thirtyeight2").value),
    four: safeParseFloat(document.getElementById("thirtynine").value),
    five: safeParseFloat(document.getElementById("fourty").value),

    six: safeParseFloat(document.getElementById("sixtynine").value),
    six2: safeParseFloat(document.getElementById("sixtynine2").value),
    seven: safeParseFloat(document.getElementById("seventy").value),
    seven2: safeParseFloat(document.getElementById("seventy2").value),
    eighth: safeParseFloat(document.getElementById("seventyone").value),
    eighth2: safeParseFloat(document.getElementById("seventyone2").value),
    ninth: safeParseFloat(document.getElementById("seventytwo").value),

    ten: safeParseFloat(document.getElementById("eightytnine").value),
    ten2: safeParseFloat(document.getElementById("eightytnine2").value),
    Q11: safeParseFloat(document.getElementById("Ninty").value),
    Q112: safeParseFloat(document.getElementById("Ninty2").value),

    Q12: safeParseFloat(document.getElementById("hundredtwentysix").value),
    Q122: safeParseFloat(document.getElementById("hundredtwentysix2").value),
    Q13: safeParseFloat(document.getElementById("hundredtwentyseven").value),
    Q132: safeParseFloat(document.getElementById("hundredtwentyseven2").value),
    Q14: safeParseFloat(document.getElementById("hundredtwentyeight").value),
    Q142: safeParseFloat(document.getElementById("hundredtwentyeight2").value),
    Q15: safeParseFloat(document.getElementById("hundredtwentseven").value),
    Q16: safeParseFloat(document.getElementById("hundredthirty").value),
  };
  let exemptSupplyuptodate = data.eighth2;
  let exemptSupplyProposedsalestoliquor = data.two * data.four + data.eighth;
  let totalexmptsupply1 =
    exemptSupplyuptodate + exemptSupplyProposedsalestoliquor;
  let exemptSupplyProposednotsalestoliquor = data.eighth;
  let totalvalue2 = exemptSupplyProposednotsalestoliquor + exemptSupplyuptodate;

  let totalSupplyuptodate = data.six2 + data.seven2 + data.eighth2;
  let totalSupplyifsaletoliquir =
    data.six + data.seven + data.eighth + data.ninth;
  let totalSupply1 = totalSupplyuptodate + totalSupplyifsaletoliquir;
  let totalSupplyifnotsaletoliquir =
    data.six + data.seven + data.eighth + data.two * data.five;
  let totalSupply2 = totalSupplyuptodate + totalSupplyifnotsaletoliquir;

  let ratioCurrent = (totalexmptsupply1 / totalSupply1) * 100;
  let ratioProposed = (totalvalue2 / totalSupply2) * 100;

  let commonITCUptodate = data.ten2 + data.Q112;
  let commonITCifsaletoliquir =
    data.ten + data.Q11 + data.Q12 + data.Q13 + data.Q14;
  console.log(
    "data.Q11 + data.Q12 + data.Q13 + data.Q14 + data.Q15;",
    data.ten,
    data.Q11,
    data.Q12,
    data.Q13,
    data.Q14,
    data.Q15
  );
  let totalCommonITC1 = commonITCifsaletoliquir + commonITCUptodate;
  let commonITCnotsaletoliquor = data.ten + data.Q11;
  let commonITCCPtotal2 = commonITCnotsaletoliquor + commonITCUptodate;

  let reversalCurrent = (totalCommonITC1 * ratioCurrent) / 100;
  let reversalProposed = (commonITCCPtotal2 * ratioProposed) / 100;

  let ReductioninRule42Current = reversalCurrent - reversalProposed;
  let IncrementalRevenueSales = (data.four - data.five) * data.two;

  let profit = IncrementalRevenueSales - ReductioninRule42Current;
  let penalty = data.Q15;
  let anyOther = data.Q16;
  let total = penalty + anyOther;
  let addCost = total;
  let netProfit = profit - addCost;
  console.log("1)Exempt Supply Upto Date: ", exemptSupplyuptodate);
  console.log(
    "2) Exempt Supply Sale to Liquir: ",
    exemptSupplyProposedsalestoliquor
  );
  console.log("3) Total Exempt Supply: ", totalexmptsupply1);
  console.log(
    "4) Exempt Supply Not Sale to Liquir:",
    exemptSupplyProposednotsalestoliquor
  );
  console.log("5) Exempt Supply Total:", totalvalue2);

  console.log("6) Total Supply Uptodate:", totalSupplyuptodate);
  console.log("7) Total Supply Sale to Liqure:", totalSupplyifsaletoliquir);
  console.log("8) Total Supply 1:", totalSupply1);
  console.log(
    "9) Total Supply Not Sale to Liquir:",
    totalSupplyifnotsaletoliquir
  );
  console.log("10) Total Supply 2:", totalSupply2);

  console.log("11) Ratio Current", ratioCurrent);
  console.log("12) Ratio Proposed", ratioProposed);

  console.log("13) Common ITC Upto Date: ", commonITCUptodate);
  console.log("14) Common ITC Sale to Liquir: ", commonITCifsaletoliquir);
  console.log("15) Common ITC Total: ", totalCommonITC1);
  console.log("16) Common ITC Not Sale to liquir: ", commonITCnotsaletoliquor);
  console.log("17) Common ITC Total2: ", commonITCCPtotal2);

  console.log("18) Reversal Current", reversalCurrent);
  console.log("19) Reversal Proposed", reversalProposed);
  console.log("20) Reductionin Rule42 Current", ReductioninRule42Current);
  console.log("21) IncrementalRevenueSales", IncrementalRevenueSales);
  console.log("22) Profit", profit);
  console.log("23) Additional Cost", addCost);
  console.log("24) NetProfit", netProfit);
  showCalculateConatiner();
  updatePDFAndDownload3(
    exemptSupplyuptodate,
    exemptSupplyProposedsalestoliquor,
    totalexmptsupply1,
    exemptSupplyProposednotsalestoliquor,
    totalvalue2,
    totalSupplyuptodate,
    totalSupplyifsaletoliquir,
    totalSupply1,
    totalSupplyifnotsaletoliquir,
    totalSupply2,
    ratioCurrent,
    ratioProposed,
    commonITCUptodate,
    commonITCifsaletoliquir,
    totalCommonITC1,
    commonITCnotsaletoliquor,
    commonITCCPtotal2,
    reversalCurrent,
    reversalProposed,
    ReductioninRule42Current,
    IncrementalRevenueSales,
    profit,
    addCost,
    netProfit
  );
}

async function updatePDFAndDownload2(
  value0,
  value1,
  value2,
  value3,
  value4,
  value5,
  value6,
  value7,
  value8,
  value9,
  value10,
  value11,
  value12,
  value13,
  value14,
  value15,
  value16,
  value17,
  value18,
  value19,
  value20,
  value21,
  value22
) {
  console.log("value8", value8);
  console.log(
    value0,
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8,
    value9,
    value10,
    value11,
    value12,
    value13,
    value14,
    value15,
    value16,
    value17,
    value18,
    value19,
    value20,
    value21,
    value22
  );
  let url = "Ethanol Calculator Report 2.pdf";

  const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());

  const pdfDoc = await PDFLib.PDFDocument.load(existingPdfBytes);

  const zero = pdfDoc.getPages()[0];
  const firstPage = pdfDoc.getPages()[0];
  const secondPage = pdfDoc.getPages()[2];
  const thirdPage = pdfDoc.getPages()[3];

  // First Row
  firstPage.drawText(formatNumberPDF(value0).toString(), {
    x: 165,
    y: 590,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value1).toString(), {
    x: 255,
    y: 590,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value2).toString(), {
    x: 340,
    y: 590,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value3).toString(), {
    x: 430,
    y: 590,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value4).toString(), {
    x: 515,
    y: 590,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });

  firstPage.drawText(formatNumberPDF(value5).toString(), {
    x: 165,
    y: 555,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });

  firstPage.drawText(formatNumberPDF(value6).toString(), {
    x: 255,
    y: 555,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value7).toString(), {
    x: 340,
    y: 555,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value8).toString(), {
    x: 430,
    y: 555,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value9).toString(), {
    x: 515,
    y: 555,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });

  firstPage.drawText(formatNumberPDF(value10).toString(), {
    x: 340,
    y: 530,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value11).toString(), {
    x: 515,
    y: 530,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });

  firstPage.drawText(formatNumberPDF(value12).toString(), {
    x: 165,
    y: 505,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value13).toString(), {
    x: 255,
    y: 505,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });

  firstPage.drawText(formatNumberPDF(value14).toString(), {
    x: 340,
    y: 505,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });

  firstPage.drawText(formatNumberPDF(value15).toString(), {
    x: 515,
    y: 505,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });

  firstPage.drawText(formatNumberPDF(value16).toString(), {
    x: 340,
    y: 480,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value17).toString(), {
    x: 515,
    y: 480,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });

  firstPage.drawText(formatNumberPDF(value18).toString(), {
    x: 340,
    y: 448,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value19).toString(), {
    x: 340,
    y: 408,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value20).toString(), {
    x: 340,
    y: 380,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value21).toString(), {
    x: 340,
    y: 355,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value22).toString(), {
    x: 340,
    y: 328,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });

  const pdfBytes = await pdfDoc.save();
  const pdfUrl = URL.createObjectURL(
    new Blob([pdfBytes], { type: "application/pdf" })
  );

  let previewContainer;

  document.querySelector(".preview-container").style.display = "block";
  previewContainer = document.querySelector(".preview-container");

  previewContainer.innerHTML = `<embed src="${pdfUrl}" width="100%" height="100%" type="application/pdf">`;

  document.getElementById("download-report").style.display = "block";

  document
    .getElementById("download-report")
    .addEventListener("click", function () {
      document.getElementById("custom-feedback-modal").style.display = "block";
    });

  document.getElementById("skip").addEventListener("click", function () {
    document.getElementById("custom-feedback-modal").style.display = "none";
    downloadPDF(pdfUrl);
  });
  document
    .getElementById("submit-download")
    .addEventListener("click", function () {
      document.getElementById("custom-feedback-modal").style.display = "none";
      downloadPDF(pdfUrl);
      setTimeout(function () {
        location.reload();
      }, 5000);
    });
}
async function updatePDFAndDownload3(
  value0,
  value1,
  value2,
  value3,
  value4,
  value5,
  value6,
  value7,
  value8,
  value9,
  value10,
  value11,
  value12,
  value13,
  value14,
  value15,
  value16,
  value17,
  value18,
  value19,
  value20,
  value21,
  value22,
  value23
) {
  console.log(
    value0,
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8,
    value9,
    value10,
    value11,
    value12,
    value13,
    value14,
    value15,
    value16,
    value17,
    value18,
    value19,
    value20,
    value21,
    value22,
    value23
  );
  let url = "Ethanol Calculator Report 2.pdf";

  const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());

  const pdfDoc = await PDFLib.PDFDocument.load(existingPdfBytes);

  const firstPage = pdfDoc.getPages()[0];

  firstPage.drawText(formatNumberPDF(value0).toString(), {
    x: 160,
    y: 590,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value1).toString(), {
    x: 248,
    y: 590,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value2).toString(), {
    x: 333,
    y: 590,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value3).toString(), {
    x: 423,
    y: 590,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value4).toString(), {
    x: 508,
    y: 590,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });

  firstPage.drawText(formatNumberPDF(value5).toString(), {
    x: 160,
    y: 555,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });

  firstPage.drawText(formatNumberPDF(value6).toString(), {
    x: 248,
    y: 555,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value7).toString(), {
    x: 333,
    y: 555,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value8).toString(), {
    x: 423,
    y: 555,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value9).toString(), {
    x: 508,
    y: 555,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });

  firstPage.drawText(formatNumberPDF(value10).toString(), {
    x: 333,
    y: 530,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value11).toString(), {
    x: 508,
    y: 530,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });

  firstPage.drawText(formatNumberPDF(value12).toString(), {
    x: 158,
    y: 505,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value13).toString(), {
    x: 248,
    y: 505,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value14).toString(), {
    x: 333,
    y: 505,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value15).toString(), {
    x: 427,
    y: 505,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value16).toString(), {
    x: 508,
    y: 505,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });

  firstPage.drawText(formatNumberPDF(value17).toString(), {
    x: 333,
    y: 480,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value18).toString(), {
    x: 508,
    y: 480,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });

  firstPage.drawText(formatNumberPDF(value19).toString(), {
    x: 333,
    y: 448,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value20).toString(), {
    x: 333,
    y: 408,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value21).toString(), {
    x: 333,
    y: 380,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value22).toString(), {
    x: 333,
    y: 355,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value23).toString(), {
    x: 333,
    y: 328,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });

  const pdfBytes = await pdfDoc.save();
  const pdfUrl = URL.createObjectURL(
    new Blob([pdfBytes], { type: "application/pdf" })
  );

  let previewContainer;

  document.querySelector(".preview-container").style.display = "block";
  previewContainer = document.querySelector(".preview-container");

  previewContainer.innerHTML = `<embed src="${pdfUrl}" width="100%" height="100%" type="application/pdf">`;

  document.getElementById("download-report").style.display = "block";

  document
    .getElementById("download-report")
    .addEventListener("click", function () {
      document.getElementById("custom-feedback-modal").style.display = "block";
    });

  document.getElementById("skip").addEventListener("click", function () {
    document.getElementById("custom-feedback-modal").style.display = "none";
    downloadPDF(pdfUrl);
  });
  document
    .getElementById("submit-download")
    .addEventListener("click", function () {
      document.getElementById("custom-feedback-modal").style.display = "none";
      downloadPDF(pdfUrl);
      setTimeout(function () {
        location.reload();
      }, 5000);
    });
}

function downloadPDF(pdfUrl) {
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "Optitx's Report.pdf";
  link.click();
  setTimeout(function () {
    location.reload();
  }, 1000);
}
