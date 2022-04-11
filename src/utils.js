export const drawRect = (detections, ctx) => {
    detections.forEach(pred => {
        // Get prediction results.
        const [x, y, width, height] = pred['bbox'];
        const text = pred['class']; 

        // Set style.
        const color = 'green';
        ctx.strokeSylt = color;
        ctx.font = '50px Arial';
        ctx.fillStyle = color;

        // Draw rectangles and text.
        ctx.beginPath();
        ctx.fillText(text, x, y);
        ctx.rect(x, y, width, height);
        ctx.stroke();
    });
}
