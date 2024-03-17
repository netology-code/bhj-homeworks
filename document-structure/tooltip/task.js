document.addEventListener('DOMContentLoaded', function() {
  let currentTooltip = null;

  document.querySelectorAll('.has-tooltip').forEach(tooltip => {
      tooltip.addEventListener('click', function(event) {
          event.preventDefault();
          const tooltipText = this.getAttribute('title');

          if (currentTooltip && currentTooltip.textContent === tooltipText) {
              currentTooltip.classList.toggle('tooltip_active');
          } else {
              if (currentTooltip) {
                  currentTooltip.remove();
              }
              currentTooltip = document.createElement('div');
              currentTooltip.classList.add('tooltip');
              currentTooltip.textContent = tooltipText;
              document.body.appendChild(currentTooltip);
              positionTooltip(this, currentTooltip);
          }
      });
  });

  function positionTooltip(tooltipTrigger, tooltipElement) {
      const tooltipRect = tooltipElement.getBoundingClientRect();
      const triggerRect = tooltipTrigger.getBoundingClientRect();
      const bodyRect = document.body.getBoundingClientRect();

      const top = triggerRect.top - tooltipRect.height - 5;
      const left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;

      tooltipElement.style.top = `${Math.max(top, bodyRect.top)}px`;
      tooltipElement.style.left = `${Math.max(left, bodyRect.left)}px`;
  }
});
