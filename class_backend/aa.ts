// console.log("hi HEllo");

// const aa: number = 2;

const APPDataSource = new DataSource({
  type: "postgres",
  host: "..",
  username: "postgres",
  password: "postgres2022",
  database: "postgres",
  synchornoize: true,
  logging: true,
  entities: [Board],
});

APPDataSource.initialize()
  .then(() => {
    console.timeLog("db접속에 성공했습니다");
  })
  .catch((error) => {
    console.log("dv접속에 실패");
    console.log("원인: ");
    console.log(error);
  });
