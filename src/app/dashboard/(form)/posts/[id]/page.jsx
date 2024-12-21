import { GetPostElementsEnglish } from "@/hook/GetPostElements";
import GetPost from "@/hook/GetPost";
import ShowPost from "./_components/ShowPost";
import ShowPostElements from "./_components/ShowPostElements";
import EditPost from "./_components/EditPost";
import EditPostElement from "./_components/EditPostElement";
import { GetPostElementsPersian } from "@/hook/GetPostElements";

async function EditPage({ params }) {
  const { id } = await params;
  const post = await GetPost(id);
  const elementsEng = await GetPostElementsEnglish(id);
  const elementsIr = await GetPostElementsPersian(id);

  return (
    <>
      <EditPost post={post}>
        <EditPostElement elements={elementsIr} />
      </EditPost>
      <ShowPost post={post}>
        <ShowPostElements elements={elementsEng} />
      </ShowPost>
    </>
  );
}

export default EditPage;
