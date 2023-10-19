export default function Modal({ children, open, onClose }) {
  return (
    <>
      {open && (
        <>
          <div className="fixed inset-0 bg-white opacity-60 z-20"></div>

          <div className="fixed inset-0 z-30">
            <div className="flex justify-center items-center min-h-full p-4">
              <div className="rounded-lg w-[700px] bg-mainlight shadow-xl border border-maingray">
                <div className="flex justify-between py-4 px-6 text-2xl font-semibold">
                  <div className="invisible">X</div>
                  <div
                    className="text-secondtext2 hover:text-secondtext cursor-pointer"
                    onClick={onClose}
                  >
                    X
                  </div>
                </div>
                <div className="p-4">{children}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
