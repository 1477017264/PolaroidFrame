// 获取DOM元素
const imageInput = document.getElementById('imageInput');
// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
const overlayImg = document.getElementById('box');
const presetSelect = document.getElementById('presetSelect');
const exportButton = document.getElementById('exportButton');



document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
<<<<<<< HEAD
                
                const background = document.getElementById('background');
                    
                    // 处理图片上传
        
                        const file = event.target.files[0];
                        if (file) {
                            const reader = new FileReader();
                            reader.onload = function (e) {
                                // 设置背景图片
                                background.style.backgroundImage = `url(${e.target.result})`;
                                background.style.backgroundSize = 'cover'; // 使图片覆盖整个背景
                                background.style.backgroundPosition = 'center'; // 图片居中显示
                            };
                            reader.readAsDataURL(file);
                        }

                
=======

                const background = document.getElementById('background');

                // 处理图片上传

                const file = event.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        // 设置背景图片
                        background.style.backgroundImage = `url(${e.target.result})`;
                        background.style.backgroundSize = 'cover'; // 使图片覆盖整个背景
                        background.style.backgroundPosition = 'center'; // 图片居中显示
                    };
                    reader.readAsDataURL(file);
                }


>>>>>>> 2df1fa7 (first commit)
                const canvas = document.getElementById('imageCanvas');
                const ctx = canvas.getContext('2d');

                canvas.width = 789;
                canvas.height = 1080;
<<<<<<< HEAD
// 裁剪并绘制图片
                
=======
                // 裁剪并绘制图片

>>>>>>> 2df1fa7 (first commit)
                // 计算裁剪区域
                const size = Math.min(img.width, img.height);
                const sx = (img.width - size) / 2;
                const sy = (img.height - size) / 2;
<<<<<<< HEAD
// 设置画布大小为789x768
                // 应用宝丽来风格滤镜
               
                
                ctx.drawImage(img, sx, sy, size, size, 46,  59, 704, 804);

                 applyPolaroidFilter(ctx);
                
                // 处理预设图片选择
                presetSelect.addEventListener('change', function () {
=======
                // 设置画布大小为789x768
                // 应用宝丽来风格滤镜


                ctx.drawImage(img, sx, sy, size, size, 46, 59, 704, 804);

                applyPolaroidFilter(ctx);

                // 处理预设图片选择
                presetSelect.addEventListener('change', function() {
>>>>>>> 2df1fa7 (first commit)
                    const selectedValue = presetSelect.value;
                    if (selectedValue) {
                        overlayImg.src = selectedValue;
                    } else {
                        overlayImg.src = ''; // 清空覆盖图片
                    }
<<<<<<< HEAD
                
                    // 重新绘制画布
                    const img = new Image();
                    img.onload = function () {
=======

                    // 重新绘制画布
                    const img = new Image();
                    img.onload = function() {
>>>>>>> 2df1fa7 (first commit)
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                        if (overlayImg.src) {
                            ctx.drawImage(overlayImg, 0, 0, 789, 1080); // 调整坐标和尺寸
                        }
                    };
                    img.src = canvas.toDataURL(); // 获取当前画布内容
                });

                // const img2 = new Image();
                // img2.src = 'img/cover2.png';
<<<<<<< HEAD
                
=======

>>>>>>> 2df1fa7 (first commit)
                // img2.onload = function() {
                //     // 将第二张图片堆叠到第一张图片上
                //     ctx.drawImage(img2, 0, 0, 880, 1080); // 调整坐标和尺寸
                // };

<<<<<<< HEAD
            }; 
=======
            };
>>>>>>> 2df1fa7 (first commit)
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

function applyPolaroidFilter(ctx) {
    const imageData = ctx.getImageData(0, 0, 880, 1080);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        // 增加亮度和对比度
        data[i] = Math.min(255, data[i] * 1.05); // Red
        data[i + 1] = Math.min(255, data[i + 1] * 1.05); // Green
        data[i + 2] = Math.min(255, data[i + 2] * 1.05); // Blue

        // 添加一些褪色效果
        data[i] = Math.min(255, data[i] + 20); // Red
        data[i + 1] = Math.min(255, data[i + 1] + 22); // Green
        data[i + 2] = Math.min(255, data[i + 2] + 22); // Blue
    }

    ctx.putImageData(imageData, 0, 0);
}



document.getElementById('downloadBtn').addEventListener('click', function() {
    const canvas = document.getElementById('imageCanvas');
<<<<<<< HEAD
   
=======

>>>>>>> 2df1fa7 (first commit)
    const polaroidFrame = document.querySelector('.polaroid-frame');
    // 创建一个新的画布来包含宝丽来边框

    const finalCanvas = document.createElement('canvas');
    finalCanvas.width = 880;
    finalCanvas.height = 1080;
    const finalCtx = finalCanvas.getContext('2d');
<<<<<<< HEAD
    
=======

>>>>>>> 2df1fa7 (first commit)
    // finalCtx.fillStyle = '#fff';
    //     finalCtx.fillRect(0, 0, 880, 1000);

    // // 绘制图片
<<<<<<< HEAD
    
    
    
=======



>>>>>>> 2df1fa7 (first commit)
    finalCtx.drawImage(canvas, 0, 0, 880, 1080);

    // 下载图片
    const link = document.createElement('a');
    link.download = 'polaroid-image.png';
    link.href = finalCanvas.toDataURL();
    link.click();
});