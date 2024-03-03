document.addEventListener('DOMContentLoaded', function() {
    const tooltips = document.querySelectorAll('.has-tooltip');
  
    tooltips.forEach(tooltip => {
      tooltip.addEventListener('click', function(event) {
        event.preventDefault();
        const tooltipText = this.getAttribute('title');
        const tooltipElement = document.createElement('div');
        tooltipElement.classList.add('tooltip');
        tooltipElement.textContent = tooltipText;
        document.body.appendChild(tooltipElement);
        positionTooltip(this, tooltipElement);
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
  
      setTimeout(() => {
        tooltipElement.remove();
      }, 2000);
    }
  });
  