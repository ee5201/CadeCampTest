import { useRouter } from "next/router";

export default function Boardpage() {
  const router = useRouter();
  return (
    <>
      <div>
        안녕하세요 게시판 입니다 동적 페이지예요!:
        <br />
        {router.query.boardId}{" "}
      </div>
    </>
  );
}
