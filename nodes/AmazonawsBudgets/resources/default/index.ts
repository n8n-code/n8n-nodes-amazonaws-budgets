import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Create Budget",
					"value": "Create Budget",
					"action": "Create Budget",
					"description": "<p>Creates a budget and, if included, notifications and subscribers. </p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href=\"https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_CreateBudget.html#API_CreateBudget_Examples\">Examples</a> section. </p> </important>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSBudgetServiceGateway.CreateBudget"
						}
					}
				},
				{
					"name": "Create Budget Action",
					"value": "Create Budget Action",
					"action": "Create Budget Action",
					"description": " Creates a budget action. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSBudgetServiceGateway.CreateBudgetAction"
						}
					}
				},
				{
					"name": "Create Notification",
					"value": "Create Notification",
					"action": "Create Notification",
					"description": "Creates a notification. You must create the budget before you create the associated notification.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSBudgetServiceGateway.CreateNotification"
						}
					}
				},
				{
					"name": "Create Subscriber",
					"value": "Create Subscriber",
					"action": "Create Subscriber",
					"description": "Creates a subscriber. You must create the associated budget and notification before you create the subscriber.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSBudgetServiceGateway.CreateSubscriber"
						}
					}
				},
				{
					"name": "Delete Budget",
					"value": "Delete Budget",
					"action": "Delete Budget",
					"description": "<p>Deletes a budget. You can delete your budget at any time.</p> <important> <p>Deleting a budget also deletes the notifications and subscribers that are associated with that budget.</p> </important>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudget"
						}
					}
				},
				{
					"name": "Delete Budget Action",
					"value": "Delete Budget Action",
					"action": "Delete Budget Action",
					"description": " Deletes a budget action. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudgetAction"
						}
					}
				},
				{
					"name": "Delete Notification",
					"value": "Delete Notification",
					"action": "Delete Notification",
					"description": "<p>Deletes a notification.</p> <important> <p>Deleting a notification also deletes the subscribers that are associated with the notification.</p> </important>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSBudgetServiceGateway.DeleteNotification"
						}
					}
				},
				{
					"name": "Delete Subscriber",
					"value": "Delete Subscriber",
					"action": "Delete Subscriber",
					"description": "<p>Deletes a subscriber.</p> <important> <p>Deleting the last subscriber to a notification also deletes the notification.</p> </important>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSBudgetServiceGateway.DeleteSubscriber"
						}
					}
				},
				{
					"name": "Describe Budget",
					"value": "Describe Budget",
					"action": "Describe Budget",
					"description": "<p>Describes a budget.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href=\"https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudget.html#API_DescribeBudget_Examples\">Examples</a> section. </p> </important>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudget"
						}
					}
				},
				{
					"name": "Describe Budget Action",
					"value": "Describe Budget Action",
					"action": "Describe Budget Action",
					"description": " Describes a budget action detail. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetAction"
						}
					}
				},
				{
					"name": "Describe Budget Action Histories",
					"value": "Describe Budget Action Histories",
					"action": "Describe Budget Action Histories",
					"description": " Describes a budget action history detail. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionHistories"
						}
					}
				},
				{
					"name": "Describe Budget Actions For Account",
					"value": "Describe Budget Actions For Account",
					"action": "Describe Budget Actions For Account",
					"description": " Describes all of the budget actions for an account. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForAccount"
						}
					}
				},
				{
					"name": "Describe Budget Actions For Budget",
					"value": "Describe Budget Actions For Budget",
					"action": "Describe Budget Actions For Budget",
					"description": " Describes all of the budget actions for a budget. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForBudget"
						}
					}
				},
				{
					"name": "Describe Budget Notifications For Account",
					"value": "Describe Budget Notifications For Account",
					"action": "Describe Budget Notifications For Account",
					"description": " Lists the budget names and notifications that are associated with an account. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount"
						}
					}
				},
				{
					"name": "Describe Budget Performance History",
					"value": "Describe Budget Performance History",
					"action": "Describe Budget Performance History",
					"description": "Describes the history for <code>DAILY</code>, <code>MONTHLY</code>, and <code>QUARTERLY</code> budgets. Budget history isn't available for <code>ANNUAL</code> budgets.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory"
						}
					}
				},
				{
					"name": "Describe Budgets",
					"value": "Describe Budgets",
					"action": "Describe Budgets",
					"description": "<p>Lists the budgets that are associated with an account.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href=\"https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgets.html#API_DescribeBudgets_Examples\">Examples</a> section. </p> </important>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgets"
						}
					}
				},
				{
					"name": "Describe Notifications For Budget",
					"value": "Describe Notifications For Budget",
					"action": "Describe Notifications For Budget",
					"description": "Lists the notifications that are associated with a budget.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSBudgetServiceGateway.DescribeNotificationsForBudget"
						}
					}
				},
				{
					"name": "Describe Subscribers For Notification",
					"value": "Describe Subscribers For Notification",
					"action": "Describe Subscribers For Notification",
					"description": "Lists the subscribers that are associated with a notification.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSBudgetServiceGateway.DescribeSubscribersForNotification"
						}
					}
				},
				{
					"name": "Execute Budget Action",
					"value": "Execute Budget Action",
					"action": "Execute Budget Action",
					"description": " Executes a budget action. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSBudgetServiceGateway.ExecuteBudgetAction"
						}
					}
				},
				{
					"name": "Update Budget",
					"value": "Update Budget",
					"action": "Update Budget",
					"description": "<p>Updates a budget. You can change every part of a budget except for the <code>budgetName</code> and the <code>calculatedSpend</code>. When you modify a budget, the <code>calculatedSpend</code> drops to zero until Amazon Web Services has new usage data to use for forecasting.</p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href=\"https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_UpdateBudget.html#API_UpdateBudget_Examples\">Examples</a> section. </p> </important>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudget"
						}
					}
				},
				{
					"name": "Update Budget Action",
					"value": "Update Budget Action",
					"action": "Update Budget Action",
					"description": " Updates a budget action. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudgetAction"
						}
					}
				},
				{
					"name": "Update Notification",
					"value": "Update Notification",
					"action": "Update Notification",
					"description": "Updates a notification.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSBudgetServiceGateway.UpdateNotification"
						}
					}
				},
				{
					"name": "Update Subscriber",
					"value": "Update Subscriber",
					"action": "Update Subscriber",
					"description": "Updates a subscriber.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSBudgetServiceGateway.UpdateSubscriber"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSBudgetServiceGateway.CreateBudget",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Budget"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSBudgetServiceGateway.CreateBudget",
			"type": "options",
			"options": [
				{
					"name": "AWS Budget Service Gateway Create Budget",
					"value": "AWSBudgetServiceGateway.CreateBudget"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Budget"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account ID",
			"name": "AccountId",
			"type": "string",
			"default": "",
			"description": "The <code>accountId</code> that is associated with the budget.",
			"routing": {
				"send": {
					"property": "AccountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Budget"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Budget",
			"name": "Budget",
			"type": "json",
			"default": "{\n  \"BudgetLimit\": {},\n  \"PlannedBudgetLimits\": {},\n  \"CostFilters\": {},\n  \"CostTypes\": {},\n  \"TimeUnit\": {},\n  \"TimePeriod\": {},\n  \"CalculatedSpend\": {},\n  \"BudgetType\": {},\n  \"LastUpdatedTime\": {},\n  \"AutoAdjustData\": {}\n}",
			"description": "The budget object that you want to create.",
			"routing": {
				"send": {
					"property": "Budget",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Budget"
					]
				}
			}
		},
		{
			"displayName": "Notifications With Subscribers",
			"name": "NotificationsWithSubscribers",
			"type": "json",
			"default": "[\n  {\n    \"Notification\": {\n      \"NotificationType\": {},\n      \"ComparisonOperator\": {},\n      \"Threshold\": {},\n      \"ThresholdType\": {},\n      \"NotificationState\": {}\n    },\n    \"Subscribers\": {}\n  }\n]",
			"description": "A notification that you want to associate with a budget. A budget can have up to five notifications, and each notification can have one SNS subscriber and up to 10 email subscribers. If you include notifications and subscribers in your <code>CreateBudget</code> call, Amazon Web Services creates the notifications and subscribers for you.",
			"routing": {
				"send": {
					"property": "NotificationsWithSubscribers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Budget"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Budget"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSBudgetServiceGateway.CreateBudgetAction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Budget Action"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSBudgetServiceGateway.CreateBudgetAction",
			"type": "options",
			"options": [
				{
					"name": "AWS Budget Service Gateway Create Budget Action",
					"value": "AWSBudgetServiceGateway.CreateBudgetAction"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Budget Action"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account ID",
			"name": "AccountId",
			"type": "string",
			"default": "",
			"description": "The account ID of the user. It's a 12-digit number.",
			"routing": {
				"send": {
					"property": "AccountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Budget Action"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Budget Name",
			"name": "BudgetName",
			"type": "string",
			"default": "",
			"description": " A string that represents the budget name. The \":\" and \"\\\" characters aren't allowed.",
			"routing": {
				"send": {
					"property": "BudgetName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Budget Action"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Notification Type",
			"name": "NotificationType",
			"type": "options",
			"default": "ACTUAL",
			"description": " The type of a notification. It must be ACTUAL or FORECASTED.",
			"options": [
				{
					"name": "ACTUAL",
					"value": "ACTUAL"
				},
				{
					"name": "FORECASTED",
					"value": "FORECASTED"
				}
			],
			"routing": {
				"send": {
					"property": "NotificationType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Budget Action"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Action Type",
			"name": "ActionType",
			"type": "options",
			"default": "APPLY_IAM_POLICY",
			"description": " The type of action. This defines the type of tasks that can be carried out by this action. This field also determines the format for definition. ",
			"options": [
				{
					"name": "APPLY IAM POLICY",
					"value": "APPLY_IAM_POLICY"
				},
				{
					"name": "APPLY SCP POLICY",
					"value": "APPLY_SCP_POLICY"
				},
				{
					"name": "RUN SSM DOCUMENTS",
					"value": "RUN_SSM_DOCUMENTS"
				}
			],
			"routing": {
				"send": {
					"property": "ActionType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Budget Action"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Action Threshold",
			"name": "ActionThreshold",
			"type": "json",
			"default": "{}",
			"description": "The trigger threshold of the action. ",
			"routing": {
				"send": {
					"property": "ActionThreshold",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Budget Action"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Definition",
			"name": "Definition",
			"type": "json",
			"default": "{\n  \"IamActionDefinition\": {\n    \"PolicyArn\": {},\n    \"Roles\": {},\n    \"Groups\": {},\n    \"Users\": {}\n  },\n  \"ScpActionDefinition\": {},\n  \"SsmActionDefinition\": {}\n}",
			"description": "Specifies all of the type-specific parameters. ",
			"routing": {
				"send": {
					"property": "Definition",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Budget Action"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Execution Role Arn",
			"name": "ExecutionRoleArn",
			"type": "string",
			"default": "",
			"description": " The role passed for action execution and reversion. Roles and actions must be in the same account. ",
			"routing": {
				"send": {
					"property": "ExecutionRoleArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Budget Action"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Approval Model",
			"name": "ApprovalModel",
			"type": "options",
			"default": "AUTOMATIC",
			"description": " This specifies if the action needs manual or automatic approval. ",
			"options": [
				{
					"name": "AUTOMATIC",
					"value": "AUTOMATIC"
				},
				{
					"name": "MANUAL",
					"value": "MANUAL"
				}
			],
			"routing": {
				"send": {
					"property": "ApprovalModel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Budget Action"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Subscribers",
			"name": "Subscribers",
			"type": "json",
			"default": "[\n  {\n    \"Address\": {}\n  }\n]",
			"description": " A list of subscribers.",
			"routing": {
				"send": {
					"property": "Subscribers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Budget Action"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Budget Action"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSBudgetServiceGateway.CreateNotification",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Notification"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSBudgetServiceGateway.CreateNotification",
			"type": "options",
			"options": [
				{
					"name": "AWS Budget Service Gateway Create Notification",
					"value": "AWSBudgetServiceGateway.CreateNotification"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Notification"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account ID",
			"name": "AccountId",
			"type": "string",
			"default": "",
			"description": "The <code>accountId</code> that is associated with the budget that you want to create a notification for.",
			"routing": {
				"send": {
					"property": "AccountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Notification"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Budget Name",
			"name": "BudgetName",
			"type": "string",
			"default": "",
			"description": "The name of the budget that you want Amazon Web Services to notify you about. Budget names must be unique within an account.",
			"routing": {
				"send": {
					"property": "BudgetName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Notification"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Notification",
			"name": "Notification",
			"type": "json",
			"default": "{\n  \"ComparisonOperator\": {},\n  \"Threshold\": {},\n  \"ThresholdType\": {},\n  \"NotificationState\": {}\n}",
			"description": "The notification that you want to create.",
			"routing": {
				"send": {
					"property": "Notification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Notification"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Subscribers",
			"name": "Subscribers",
			"type": "json",
			"default": "[\n  {\n    \"Address\": {}\n  }\n]",
			"description": "A list of subscribers that you want to associate with the notification. Each notification can have one SNS subscriber and up to 10 email subscribers.",
			"routing": {
				"send": {
					"property": "Subscribers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Notification"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Notification"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSBudgetServiceGateway.CreateSubscriber",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Subscriber"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSBudgetServiceGateway.CreateSubscriber",
			"type": "options",
			"options": [
				{
					"name": "AWS Budget Service Gateway Create Subscriber",
					"value": "AWSBudgetServiceGateway.CreateSubscriber"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Subscriber"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account ID",
			"name": "AccountId",
			"type": "string",
			"default": "",
			"description": "The <code>accountId</code> that is associated with the budget that you want to create a subscriber for.",
			"routing": {
				"send": {
					"property": "AccountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Subscriber"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Budget Name",
			"name": "BudgetName",
			"type": "string",
			"default": "",
			"description": "The name of the budget that you want to subscribe to. Budget names must be unique within an account.",
			"routing": {
				"send": {
					"property": "BudgetName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Subscriber"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Notification",
			"name": "Notification",
			"type": "json",
			"default": "{\n  \"ComparisonOperator\": {},\n  \"Threshold\": {},\n  \"ThresholdType\": {},\n  \"NotificationState\": {}\n}",
			"description": "The notification that you want to create a subscriber for.",
			"routing": {
				"send": {
					"property": "Notification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Subscriber"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Subscriber",
			"name": "Subscriber",
			"type": "json",
			"default": "{\n  \"Address\": {}\n}",
			"description": "The subscriber that you want to associate with a budget notification.",
			"routing": {
				"send": {
					"property": "Subscriber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Subscriber"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Subscriber"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudget",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Budget"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSBudgetServiceGateway.DeleteBudget",
			"type": "options",
			"options": [
				{
					"name": "AWS Budget Service Gateway Delete Budget",
					"value": "AWSBudgetServiceGateway.DeleteBudget"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Budget"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account ID",
			"name": "AccountId",
			"type": "string",
			"default": "",
			"description": "The <code>accountId</code> that is associated with the budget that you want to delete.",
			"routing": {
				"send": {
					"property": "AccountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Budget"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Budget Name",
			"name": "BudgetName",
			"type": "string",
			"default": "",
			"description": "The name of the budget that you want to delete.",
			"routing": {
				"send": {
					"property": "BudgetName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Budget"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Budget"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudgetAction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Budget Action"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSBudgetServiceGateway.DeleteBudgetAction",
			"type": "options",
			"options": [
				{
					"name": "AWS Budget Service Gateway Delete Budget Action",
					"value": "AWSBudgetServiceGateway.DeleteBudgetAction"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Budget Action"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account ID",
			"name": "AccountId",
			"type": "string",
			"default": "",
			"description": "The account ID of the user. It's a 12-digit number.",
			"routing": {
				"send": {
					"property": "AccountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Budget Action"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Budget Name",
			"name": "BudgetName",
			"type": "string",
			"default": "",
			"description": " A string that represents the budget name. The \":\" and \"\\\" characters aren't allowed.",
			"routing": {
				"send": {
					"property": "BudgetName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Budget Action"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Action ID",
			"name": "ActionId",
			"type": "string",
			"default": "",
			"description": " A system-generated universally unique identifier (UUID) for the action. ",
			"routing": {
				"send": {
					"property": "ActionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Budget Action"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Budget Action"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSBudgetServiceGateway.DeleteNotification",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Notification"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSBudgetServiceGateway.DeleteNotification",
			"type": "options",
			"options": [
				{
					"name": "AWS Budget Service Gateway Delete Notification",
					"value": "AWSBudgetServiceGateway.DeleteNotification"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Notification"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account ID",
			"name": "AccountId",
			"type": "string",
			"default": "",
			"description": "The <code>accountId</code> that is associated with the budget whose notification you want to delete.",
			"routing": {
				"send": {
					"property": "AccountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Notification"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Budget Name",
			"name": "BudgetName",
			"type": "string",
			"default": "",
			"description": "The name of the budget whose notification you want to delete.",
			"routing": {
				"send": {
					"property": "BudgetName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Notification"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Notification",
			"name": "Notification",
			"type": "json",
			"default": "{\n  \"ComparisonOperator\": {},\n  \"Threshold\": {},\n  \"ThresholdType\": {},\n  \"NotificationState\": {}\n}",
			"description": "The notification that you want to delete.",
			"routing": {
				"send": {
					"property": "Notification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Notification"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Notification"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSBudgetServiceGateway.DeleteSubscriber",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Subscriber"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSBudgetServiceGateway.DeleteSubscriber",
			"type": "options",
			"options": [
				{
					"name": "AWS Budget Service Gateway Delete Subscriber",
					"value": "AWSBudgetServiceGateway.DeleteSubscriber"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Subscriber"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account ID",
			"name": "AccountId",
			"type": "string",
			"default": "",
			"description": "The <code>accountId</code> that is associated with the budget whose subscriber you want to delete.",
			"routing": {
				"send": {
					"property": "AccountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Subscriber"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Budget Name",
			"name": "BudgetName",
			"type": "string",
			"default": "",
			"description": "The name of the budget whose subscriber you want to delete.",
			"routing": {
				"send": {
					"property": "BudgetName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Subscriber"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Notification",
			"name": "Notification",
			"type": "json",
			"default": "{\n  \"ComparisonOperator\": {},\n  \"Threshold\": {},\n  \"ThresholdType\": {},\n  \"NotificationState\": {}\n}",
			"description": "The notification whose subscriber you want to delete.",
			"routing": {
				"send": {
					"property": "Notification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Subscriber"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Subscriber",
			"name": "Subscriber",
			"type": "json",
			"default": "{\n  \"Address\": {}\n}",
			"description": "The subscriber that you want to delete.",
			"routing": {
				"send": {
					"property": "Subscriber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Subscriber"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Subscriber"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudget",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSBudgetServiceGateway.DescribeBudget",
			"type": "options",
			"options": [
				{
					"name": "AWS Budget Service Gateway Describe Budget",
					"value": "AWSBudgetServiceGateway.DescribeBudget"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account ID",
			"name": "AccountId",
			"type": "string",
			"default": "",
			"description": "The <code>accountId</code> that is associated with the budget that you want a description of.",
			"routing": {
				"send": {
					"property": "AccountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Budget Name",
			"name": "BudgetName",
			"type": "string",
			"default": "",
			"description": "The name of the budget that you want a description of.",
			"routing": {
				"send": {
					"property": "BudgetName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetAction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Action"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSBudgetServiceGateway.DescribeBudgetAction",
			"type": "options",
			"options": [
				{
					"name": "AWS Budget Service Gateway Describe Budget Action",
					"value": "AWSBudgetServiceGateway.DescribeBudgetAction"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Action"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account ID",
			"name": "AccountId",
			"type": "string",
			"default": "",
			"description": "The account ID of the user. It's a 12-digit number.",
			"routing": {
				"send": {
					"property": "AccountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Action"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Budget Name",
			"name": "BudgetName",
			"type": "string",
			"default": "",
			"description": " A string that represents the budget name. The \":\" and \"\\\" characters aren't allowed.",
			"routing": {
				"send": {
					"property": "BudgetName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Action"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Action ID",
			"name": "ActionId",
			"type": "string",
			"default": "",
			"description": " A system-generated universally unique identifier (UUID) for the action. ",
			"routing": {
				"send": {
					"property": "ActionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Action"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Action"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionHistories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Action Histories"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Action Histories"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Action Histories"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSBudgetServiceGateway.DescribeBudgetActionHistories",
			"type": "options",
			"options": [
				{
					"name": "AWS Budget Service Gateway Describe Budget Action Histories",
					"value": "AWSBudgetServiceGateway.DescribeBudgetActionHistories"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Action Histories"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account ID",
			"name": "AccountId",
			"type": "string",
			"default": "",
			"description": "The account ID of the user. It's a 12-digit number.",
			"routing": {
				"send": {
					"property": "AccountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Action Histories"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Budget Name",
			"name": "BudgetName",
			"type": "string",
			"default": "",
			"description": " A string that represents the budget name. The \":\" and \"\\\" characters aren't allowed.",
			"routing": {
				"send": {
					"property": "BudgetName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Action Histories"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Action ID",
			"name": "ActionId",
			"type": "string",
			"default": "",
			"description": " A system-generated universally unique identifier (UUID) for the action. ",
			"routing": {
				"send": {
					"property": "ActionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Action Histories"
					]
				}
			}
		},
		{
			"displayName": "Time Period",
			"name": "TimePeriod",
			"type": "json",
			"default": "{\n  \"End\": {}\n}",
			"description": "The period of time that's covered by a budget. The period has a start date and an end date. The start date must come before the end date. There are no restrictions on the end date. ",
			"routing": {
				"send": {
					"property": "TimePeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Action Histories"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": " An integer that represents how many entries a paginated response contains. The maximum is 100.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Action Histories"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": " A generic string.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Action Histories"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Action Histories"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForAccount",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Actions For Account"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Actions For Account"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Actions For Account"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSBudgetServiceGateway.DescribeBudgetActionsForAccount",
			"type": "options",
			"options": [
				{
					"name": "AWS Budget Service Gateway Describe Budget Actions For Account",
					"value": "AWSBudgetServiceGateway.DescribeBudgetActionsForAccount"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Actions For Account"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account ID",
			"name": "AccountId",
			"type": "string",
			"default": "",
			"description": "The account ID of the user. It's a 12-digit number.",
			"routing": {
				"send": {
					"property": "AccountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Actions For Account"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": " An integer that represents how many entries a paginated response contains. The maximum is 100.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Actions For Account"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": " A generic string.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Actions For Account"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Actions For Account"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForBudget",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Actions For Budget"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Actions For Budget"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Actions For Budget"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSBudgetServiceGateway.DescribeBudgetActionsForBudget",
			"type": "options",
			"options": [
				{
					"name": "AWS Budget Service Gateway Describe Budget Actions For Budget",
					"value": "AWSBudgetServiceGateway.DescribeBudgetActionsForBudget"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Actions For Budget"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account ID",
			"name": "AccountId",
			"type": "string",
			"default": "",
			"description": "The account ID of the user. It's a 12-digit number.",
			"routing": {
				"send": {
					"property": "AccountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Actions For Budget"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Budget Name",
			"name": "BudgetName",
			"type": "string",
			"default": "",
			"description": " A string that represents the budget name. The \":\" and \"\\\" characters aren't allowed.",
			"routing": {
				"send": {
					"property": "BudgetName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Actions For Budget"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": " An integer that represents how many entries a paginated response contains. The maximum is 100.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Actions For Budget"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": " A generic string.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Actions For Budget"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Actions For Budget"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Notifications For Account"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Notifications For Account"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Notifications For Account"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount",
			"type": "options",
			"options": [
				{
					"name": "AWS Budget Service Gateway Describe Budget Notifications For Account",
					"value": "AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Notifications For Account"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account ID",
			"name": "AccountId",
			"type": "string",
			"default": "",
			"description": "The account ID of the user. It's a 12-digit number.",
			"routing": {
				"send": {
					"property": "AccountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Notifications For Account"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": " An integer that shows how many budget name entries a paginated response contains. ",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Notifications For Account"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": " A generic string.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Notifications For Account"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Notifications For Account"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Performance History"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Performance History"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Performance History"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory",
			"type": "options",
			"options": [
				{
					"name": "AWS Budget Service Gateway Describe Budget Performance History",
					"value": "AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Performance History"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account ID",
			"name": "AccountId",
			"type": "string",
			"default": "",
			"description": "The account ID of the user. It's a 12-digit number.",
			"routing": {
				"send": {
					"property": "AccountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Performance History"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Budget Name",
			"name": "BudgetName",
			"type": "string",
			"default": "",
			"description": " A string that represents the budget name. The \":\" and \"\\\" characters aren't allowed.",
			"routing": {
				"send": {
					"property": "BudgetName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Performance History"
					]
				}
			}
		},
		{
			"displayName": "Time Period",
			"name": "TimePeriod",
			"type": "json",
			"default": "{\n  \"End\": {}\n}",
			"description": "Retrieves how often the budget went into an <code>ALARM</code> state for the specified time period.",
			"routing": {
				"send": {
					"property": "TimePeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Performance History"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": " An integer that represents how many entries a paginated response contains. The maximum is 100.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Performance History"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": " A generic string.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Performance History"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budget Performance History"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budgets"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budgets"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budgets"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSBudgetServiceGateway.DescribeBudgets",
			"type": "options",
			"options": [
				{
					"name": "AWS Budget Service Gateway Describe Budgets",
					"value": "AWSBudgetServiceGateway.DescribeBudgets"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budgets"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account ID",
			"name": "AccountId",
			"type": "string",
			"default": "",
			"description": "The <code>accountId</code> that is associated with the budgets that you want descriptions of.",
			"routing": {
				"send": {
					"property": "AccountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budgets"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "An optional integer that represents how many entries a paginated response contains. The maximum is 100.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budgets"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "The pagination token that you include in your request to indicate the next set of results that you want to retrieve.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budgets"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Budgets"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSBudgetServiceGateway.DescribeNotificationsForBudget",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Notifications For Budget"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Notifications For Budget"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Notifications For Budget"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSBudgetServiceGateway.DescribeNotificationsForBudget",
			"type": "options",
			"options": [
				{
					"name": "AWS Budget Service Gateway Describe Notifications For Budget",
					"value": "AWSBudgetServiceGateway.DescribeNotificationsForBudget"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Notifications For Budget"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account ID",
			"name": "AccountId",
			"type": "string",
			"default": "",
			"description": "The <code>accountId</code> that is associated with the budget whose notifications you want descriptions of.",
			"routing": {
				"send": {
					"property": "AccountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Notifications For Budget"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Budget Name",
			"name": "BudgetName",
			"type": "string",
			"default": "",
			"description": "The name of the budget whose notifications you want descriptions of.",
			"routing": {
				"send": {
					"property": "BudgetName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Notifications For Budget"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "An optional integer that represents how many entries a paginated response contains. The maximum is 100.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Notifications For Budget"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "The pagination token that you include in your request to indicate the next set of results that you want to retrieve.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Notifications For Budget"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Notifications For Budget"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSBudgetServiceGateway.DescribeSubscribersForNotification",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Subscribers For Notification"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Subscribers For Notification"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Subscribers For Notification"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSBudgetServiceGateway.DescribeSubscribersForNotification",
			"type": "options",
			"options": [
				{
					"name": "AWS Budget Service Gateway Describe Subscribers For Notification",
					"value": "AWSBudgetServiceGateway.DescribeSubscribersForNotification"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Subscribers For Notification"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account ID",
			"name": "AccountId",
			"type": "string",
			"default": "",
			"description": "The <code>accountId</code> that is associated with the budget whose subscribers you want descriptions of.",
			"routing": {
				"send": {
					"property": "AccountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Subscribers For Notification"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Budget Name",
			"name": "BudgetName",
			"type": "string",
			"default": "",
			"description": "The name of the budget whose subscribers you want descriptions of.",
			"routing": {
				"send": {
					"property": "BudgetName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Subscribers For Notification"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Notification",
			"name": "Notification",
			"type": "json",
			"default": "{\n  \"ComparisonOperator\": {},\n  \"Threshold\": {},\n  \"ThresholdType\": {},\n  \"NotificationState\": {}\n}",
			"description": "The notification whose subscribers you want to list.",
			"routing": {
				"send": {
					"property": "Notification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Subscribers For Notification"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "An optional integer that represents how many entries a paginated response contains. The maximum is 100.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Subscribers For Notification"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "The pagination token that you include in your request to indicate the next set of results that you want to retrieve.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Subscribers For Notification"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Subscribers For Notification"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSBudgetServiceGateway.ExecuteBudgetAction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Execute Budget Action"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSBudgetServiceGateway.ExecuteBudgetAction",
			"type": "options",
			"options": [
				{
					"name": "AWS Budget Service Gateway Execute Budget Action",
					"value": "AWSBudgetServiceGateway.ExecuteBudgetAction"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Execute Budget Action"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account ID",
			"name": "AccountId",
			"type": "string",
			"default": "",
			"description": "The account ID of the user. It's a 12-digit number.",
			"routing": {
				"send": {
					"property": "AccountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Execute Budget Action"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Budget Name",
			"name": "BudgetName",
			"type": "string",
			"default": "",
			"description": " A string that represents the budget name. The \":\" and \"\\\" characters aren't allowed.",
			"routing": {
				"send": {
					"property": "BudgetName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Execute Budget Action"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Action ID",
			"name": "ActionId",
			"type": "string",
			"default": "",
			"description": " A system-generated universally unique identifier (UUID) for the action. ",
			"routing": {
				"send": {
					"property": "ActionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Execute Budget Action"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Execution Type",
			"name": "ExecutionType",
			"type": "options",
			"default": "APPROVE_BUDGET_ACTION",
			"description": " The type of execution. ",
			"options": [
				{
					"name": "APPROVE BUDGET ACTION",
					"value": "APPROVE_BUDGET_ACTION"
				},
				{
					"name": "RETRY BUDGET ACTION",
					"value": "RETRY_BUDGET_ACTION"
				},
				{
					"name": "REVERSE BUDGET ACTION",
					"value": "REVERSE_BUDGET_ACTION"
				},
				{
					"name": "RESET BUDGET ACTION",
					"value": "RESET_BUDGET_ACTION"
				}
			],
			"routing": {
				"send": {
					"property": "ExecutionType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Execute Budget Action"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Execute Budget Action"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudget",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Budget"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSBudgetServiceGateway.UpdateBudget",
			"type": "options",
			"options": [
				{
					"name": "AWS Budget Service Gateway Update Budget",
					"value": "AWSBudgetServiceGateway.UpdateBudget"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Budget"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account ID",
			"name": "AccountId",
			"type": "string",
			"default": "",
			"description": "The <code>accountId</code> that is associated with the budget that you want to update.",
			"routing": {
				"send": {
					"property": "AccountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Budget"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "New Budget",
			"name": "NewBudget",
			"type": "json",
			"default": "{\n  \"BudgetLimit\": {},\n  \"PlannedBudgetLimits\": {},\n  \"CostFilters\": {},\n  \"CostTypes\": {},\n  \"TimeUnit\": {},\n  \"TimePeriod\": {},\n  \"CalculatedSpend\": {},\n  \"BudgetType\": {},\n  \"LastUpdatedTime\": {},\n  \"AutoAdjustData\": {}\n}",
			"description": "The budget that you want to update your budget to.",
			"routing": {
				"send": {
					"property": "NewBudget",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Budget"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Budget"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudgetAction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Budget Action"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSBudgetServiceGateway.UpdateBudgetAction",
			"type": "options",
			"options": [
				{
					"name": "AWS Budget Service Gateway Update Budget Action",
					"value": "AWSBudgetServiceGateway.UpdateBudgetAction"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Budget Action"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account ID",
			"name": "AccountId",
			"type": "string",
			"default": "",
			"description": "The account ID of the user. It's a 12-digit number.",
			"routing": {
				"send": {
					"property": "AccountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Budget Action"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Budget Name",
			"name": "BudgetName",
			"type": "string",
			"default": "",
			"description": " A string that represents the budget name. The \":\" and \"\\\" characters aren't allowed.",
			"routing": {
				"send": {
					"property": "BudgetName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Budget Action"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Action ID",
			"name": "ActionId",
			"type": "string",
			"default": "",
			"description": " A system-generated universally unique identifier (UUID) for the action. ",
			"routing": {
				"send": {
					"property": "ActionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Budget Action"
					]
				}
			}
		},
		{
			"displayName": "Notification Type",
			"name": "NotificationType",
			"type": "options",
			"default": "ACTUAL",
			"description": " The type of a notification. It must be ACTUAL or FORECASTED.",
			"options": [
				{
					"name": "ACTUAL",
					"value": "ACTUAL"
				},
				{
					"name": "FORECASTED",
					"value": "FORECASTED"
				}
			],
			"routing": {
				"send": {
					"property": "NotificationType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Budget Action"
					]
				}
			}
		},
		{
			"displayName": "Action Threshold",
			"name": "ActionThreshold",
			"type": "json",
			"default": "{}",
			"description": "The trigger threshold of the action. ",
			"routing": {
				"send": {
					"property": "ActionThreshold",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Budget Action"
					]
				}
			}
		},
		{
			"displayName": "Definition",
			"name": "Definition",
			"type": "json",
			"default": "{\n  \"IamActionDefinition\": {\n    \"PolicyArn\": {},\n    \"Roles\": {},\n    \"Groups\": {},\n    \"Users\": {}\n  },\n  \"ScpActionDefinition\": {},\n  \"SsmActionDefinition\": {}\n}",
			"description": "Specifies all of the type-specific parameters. ",
			"routing": {
				"send": {
					"property": "Definition",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Budget Action"
					]
				}
			}
		},
		{
			"displayName": "Execution Role Arn",
			"name": "ExecutionRoleArn",
			"type": "string",
			"default": "",
			"description": " The role passed for action execution and reversion. Roles and actions must be in the same account. ",
			"routing": {
				"send": {
					"property": "ExecutionRoleArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Budget Action"
					]
				}
			}
		},
		{
			"displayName": "Approval Model",
			"name": "ApprovalModel",
			"type": "options",
			"default": "AUTOMATIC",
			"description": " This specifies if the action needs manual or automatic approval. ",
			"options": [
				{
					"name": "AUTOMATIC",
					"value": "AUTOMATIC"
				},
				{
					"name": "MANUAL",
					"value": "MANUAL"
				}
			],
			"routing": {
				"send": {
					"property": "ApprovalModel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Budget Action"
					]
				}
			}
		},
		{
			"displayName": "Subscribers",
			"name": "Subscribers",
			"type": "json",
			"default": "[\n  {\n    \"Address\": {}\n  }\n]",
			"description": " A list of subscribers.",
			"routing": {
				"send": {
					"property": "Subscribers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Budget Action"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Budget Action"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSBudgetServiceGateway.UpdateNotification",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Notification"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSBudgetServiceGateway.UpdateNotification",
			"type": "options",
			"options": [
				{
					"name": "AWS Budget Service Gateway Update Notification",
					"value": "AWSBudgetServiceGateway.UpdateNotification"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Notification"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account ID",
			"name": "AccountId",
			"type": "string",
			"default": "",
			"description": "The <code>accountId</code> that is associated with the budget whose notification you want to update.",
			"routing": {
				"send": {
					"property": "AccountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Notification"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Budget Name",
			"name": "BudgetName",
			"type": "string",
			"default": "",
			"description": "The name of the budget whose notification you want to update.",
			"routing": {
				"send": {
					"property": "BudgetName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Notification"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Old Notification",
			"name": "OldNotification",
			"type": "json",
			"default": "{\n  \"ComparisonOperator\": {},\n  \"Threshold\": {},\n  \"ThresholdType\": {},\n  \"NotificationState\": {}\n}",
			"description": "The previous notification that is associated with a budget.",
			"routing": {
				"send": {
					"property": "OldNotification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Notification"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "New Notification",
			"name": "NewNotification",
			"type": "json",
			"default": "{\n  \"ComparisonOperator\": {},\n  \"Threshold\": {},\n  \"ThresholdType\": {},\n  \"NotificationState\": {}\n}",
			"description": "The updated notification to be associated with a budget.",
			"routing": {
				"send": {
					"property": "NewNotification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Notification"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Notification"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSBudgetServiceGateway.UpdateSubscriber",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Subscriber"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSBudgetServiceGateway.UpdateSubscriber",
			"type": "options",
			"options": [
				{
					"name": "AWS Budget Service Gateway Update Subscriber",
					"value": "AWSBudgetServiceGateway.UpdateSubscriber"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Subscriber"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account ID",
			"name": "AccountId",
			"type": "string",
			"default": "",
			"description": "The <code>accountId</code> that is associated with the budget whose subscriber you want to update.",
			"routing": {
				"send": {
					"property": "AccountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Subscriber"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Budget Name",
			"name": "BudgetName",
			"type": "string",
			"default": "",
			"description": "The name of the budget whose subscriber you want to update.",
			"routing": {
				"send": {
					"property": "BudgetName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Subscriber"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Notification",
			"name": "Notification",
			"type": "json",
			"default": "{\n  \"ComparisonOperator\": {},\n  \"Threshold\": {},\n  \"ThresholdType\": {},\n  \"NotificationState\": {}\n}",
			"description": "The notification whose subscriber you want to update.",
			"routing": {
				"send": {
					"property": "Notification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Subscriber"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Old Subscriber",
			"name": "OldSubscriber",
			"type": "json",
			"default": "{\n  \"Address\": {}\n}",
			"description": "The previous subscriber that is associated with a budget notification.",
			"routing": {
				"send": {
					"property": "OldSubscriber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Subscriber"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "New Subscriber",
			"name": "NewSubscriber",
			"type": "json",
			"default": "{\n  \"Address\": {}\n}",
			"description": "The updated subscriber that is associated with a budget notification.",
			"routing": {
				"send": {
					"property": "NewSubscriber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Subscriber"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Subscriber"
					]
				}
			}
		},
];
