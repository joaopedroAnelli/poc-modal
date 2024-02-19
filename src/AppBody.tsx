import Child from './Child';
import ModalOpenerButton from './Buton';

export default function AppBody() {
  return (
    <div className='bg-slate-200 flex flex-col gap-6 items-center justify-center p-12 min-h-dvh'>
      <h1 className='text-slate-600 text-3xl'>Modal - POC</h1>
      <div className='flex gap-3 justify-center'>
        <Child />

        <Child />
      </div>
      <ModalOpenerButton />
    </div>
  );
}
