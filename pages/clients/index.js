import  Link  from 'next/link';

const Clients = () => {
  const clients = [
    { id: 1, name: 'Lalo' },
    { id: 2, name: 'Tuco' },
    { id: 3, name: 'Walter' },
    { id: 4, name: 'Gustavo' }
  ];

  return (
    <div>
      <h1>The Clients</h1>
      <ul>
        {clients.map(client => (
          <li key={client.id}>
            <Link href={`/clients/${client.name}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clients;