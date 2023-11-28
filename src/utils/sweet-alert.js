import Swal from "sweetalert2";

export const alertSuccess = (title, text) => {
  return Swal.fire({
    title: title,
    text: text,
    icon: "success",
  });
};

export const alertBox = (title) => {
  return Swal.fire({
    position: "center",
    icon: "success",
    title: title,
    showConfirmButton: false,
    timer: 1500,
  });
};

export const alertFailedBox = (title) => {
  return Swal.fire({
    position: "center",
    icon: "failed",
    title: title,
    showConfirmButton: false,
    timer: 1500,
  });
};
