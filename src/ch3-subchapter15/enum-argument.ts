enum AppStatus2 {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  ONHOLD = "HOLD",
}

function checkStatus(status: AppStatus2): void {
  console.log(status);
}

checkStatus(AppStatus2.ACTIVE);
//ACTIVE
