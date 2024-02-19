import { useRef } from 'react';

const Child = () => {
  const counterRef = useRef(0);

  counterRef.current += 1;

  return (
    <div className='bg-white rounded-md shadow-sm flex flex-col justify-center items-center gap-3 p-3'>
      <p className='text-sm text-slate-800'>Renderizou</p>
      <span className='text-xl font-bold text-slate-800'>
        {counterRef.current}
      </span>
    </div>
  );
};

export default Child;
