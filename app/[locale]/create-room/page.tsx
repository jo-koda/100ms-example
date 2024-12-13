import Form from './_sections/form';
import Providers from './_sections/provider';
import Header from './_sections/header';

export default async function Page() {
  return (
    <Providers>
      <div className="flex h-full flex-col gap-4">
        <Header />
        <Form />
      </div>
    </Providers>
  );
}
