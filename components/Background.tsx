const Background = () => {
  return (
    <div className="absolute inset-0 bg-[#faf9f7]">
      <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-[#f5f5f5] to-transparent opacity-30"></div>
      <div 
        className="absolute left-0 top-0 w-1/3 h-full" 
        style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, #d1d5db 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>
    </div>
  );
};

export default Background;
