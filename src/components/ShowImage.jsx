function ShowImage({ data }) {
  return (
    <div className="flex items-stretch w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
      <div className="max-w-full overflow-hidden rounded shadow-lg">
        <img
          className="w-full h-full object-cover"
          src={`data:image/jpeg;base64, ${data.file}`}
          alt=""
        />
      </div>
    </div>
  );
}

export default ShowImage;
