import { useRouter } from "next/router";

const ClientDetails = () => {

  const router = useRouter();
  const name = router.query;

  const loadProjectHandler = () => {
    router.push(`/clients/${name.id}/project1`);
  };

  return (
    <div>
      <h1>Welcome: {name.id}</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientDetails;
