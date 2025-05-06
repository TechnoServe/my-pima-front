export const centerTextPlugin = {
    id: "centerText",
    afterDraw(chart) {
        const opts = chart.config.options.plugins.centerText;
        if (!opts || !opts.text) return;

        const {
            ctx,
            chartArea: { width, height, top },
        } = chart;
        ctx.save();
        ctx.font = opts.font || "bold 18px Arial";
        ctx.fillStyle = opts.color || "#000";
        ctx.textAlign = "center";
        ctx.fillText(opts.text, width / 2, top + height / 2);
        ctx.restore();
    },
};
