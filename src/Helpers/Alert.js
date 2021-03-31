import React from "react";

/* Alert helper provided for valid and invalid form submission */
function Alert({ type = "danger", messages = [], testId }) {

  return (
    <div className={`alert alert-${type}`} role="alert" data-testid={testId}>
      {messages.map(error => (
        <p className="mb-0 small" key={error}>
          {error}
        </p>
      ))}
    </div>
  );
}

export default Alert;