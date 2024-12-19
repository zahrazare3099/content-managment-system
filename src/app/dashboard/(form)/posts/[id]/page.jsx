import { useGetPostElementsEnglish } from "@/hook/useGetPostElements";
import useGetPost from "@/hook/useGetPost";
import ShowPost from "./_components/ShowPost";
import ShowPostElements from "./_components/ShowPostElements";
import EditPost from "./_components/EditPost";
import EditPostElement from "./_components/EditPostElement";
import { useGetPostElementsPersian } from "@/hook/useGetPostElements";

async function EditPage({ params }) {
  const { id } = await params;
  const post = await useGetPost(id);
  const elementsEng = await useGetPostElementsEnglish(id);
  const elementsIr = await useGetPostElementsPersian(id);

  return (
    <>
      <ShowPost post={post}>
        <ShowPostElements elements={elementsEng} />
      </ShowPost>
      <EditPost post={post}>
        <EditPostElement elements={elementsIr} />
      </EditPost>
    </>
  );
}

export default EditPage;
