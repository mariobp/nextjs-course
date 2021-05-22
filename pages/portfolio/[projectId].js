import { useRouter } from 'next/router'

const PortFolioId = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  const { projectId } = router.query;

  return (
    <div>
      <h1>The PortFolio Item: {projectId}</h1>
    </div>
  )
};

export default PortFolioId;