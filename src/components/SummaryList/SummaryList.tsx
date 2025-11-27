import React from 'react';
import classNames from 'classnames';
import { SummaryListProps, SummaryListItem } from './SummaryList.types';
import './SummaryList.scss';

export const SummaryList: React.FC<SummaryListProps> = ({
  items,
  noBorder = false,
  className,
  ...rest
}) => {
  const summaryListClasses = classNames(
	'nhsuk-summary-list',
	{
	  'nhsuk-summary-list--no-border': noBorder,
	},
	className
  );

  const renderContent = (content: { text?: string; html?: string; children?: React.ReactNode }) => {
	if (content.children) {
	  return content.children;
	}
	
	if (content.html) {
	  return <span dangerouslySetInnerHTML={{ __html: content.html }} />;
	}
	
	if (content.text) {
	  return content.text;
	}
	
	return null;
  };

  const renderActions = (actions: SummaryListItem['actions']) => {
	if (!actions || !actions.items.length) {
	  return null;
	}

	  return (
			
				<dd className="nhsuk-summary-list__actions">
					<ul className="nhsuk-summary-list__actions-list">
					{actions.items.map((action, actionIndex) => (
						<li 
						key={actionIndex} 
						className="nhsuk-summary-list__actions-list-item"
						>
						<a
							href={action.href}
							className="nhsuk-link"
							{...action.attributes}
						>
							{renderContent(action)}
							{action.visuallyHiddenText && (
							<span className="nhsuk-u-visually-hidden">
								{action.visuallyHiddenText}
							</span>
							)}
						</a>
						</li>
					))}
					</ul>
				</dd>
			
	);
  };

return (
	<div className="nhsuk-summary-list-container">
		<dl className={summaryListClasses} {...rest}>
		{items.map((item, index) => (
			<div key={index} className="nhsuk-summary-list__row">
			<dt className="nhsuk-summary-list__key">
				{renderContent(item.key)}
			</dt>
			<dd className="nhsuk-summary-list__value">
				{renderContent(item.value)}
			</dd>
			{renderActions(item.actions)}
			</div>
		))}
		</dl>
	</div>
  );
};
