import React from 'react';

function Error() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-red-500 text-white p-4 rounded-md shadow-md">
        Verileri yüklerken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.
      </div>
    </div>
  );
}

export default Error;
