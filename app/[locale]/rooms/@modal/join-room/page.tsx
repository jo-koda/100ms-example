import JoinForm from './_sections/join-form';
import Providers from './_sections/provider';
import Header from './_sections/header';

export default async function Page({
  searchParams,
}: {
  searchParams: { roomId: string };
}) {
  return (
    <Providers roomId={searchParams.roomId}>
      <div className="flex h-full flex-col gap-4">
        <Header />
        <JoinForm />
      </div>
    </Providers>
  );
}
