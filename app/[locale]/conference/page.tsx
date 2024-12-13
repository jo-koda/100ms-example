import ConferenceRoom from './_sections/conference-room';
import Providers from './_sections/provider';
import Header from './_sections/header';

export default async function Page() {
  return (
    <Providers>
      <div className="flex h-full flex-col gap-4">
        <Header />
        <ConferenceRoom />
      </div>
    </Providers>
  );
}
